import { Duration, RemovalPolicy } from "aws-cdk-lib"
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs"
import { Runtime, Tracing } from "aws-cdk-lib/aws-lambda"
import { EventType, Bucket } from "aws-cdk-lib/aws-s3"
import { LambdaDestination } from "aws-cdk-lib/aws-s3-notifications"
import { Construct } from "constructs"
import * as path from "path"

export interface ThumbnailLambdaEnvs {
  [key: string]: string
  /**
   * Destination bucekt name
   */
  DEST_BUCKET: string

  /**
   * Thumbnail width
   *
   * @default 100
   */
  RESIZE_WIDTH: string

  /**
   * Support image type
   *
   * @default png,jpg
   */
  SUPPORT_IMAGE_TYPES: string
}

export enum ImageTypes {
  PNG = "png",
  JPEG = "jpg",
  GIF = "gif",
  SVG = "svg",
  WEBP = "webp",
}

export interface S3ThumbnailStackProps {
  /**
   * The bucket name which will trigger event to lambada
   */
  readonly bucketName: string

  /**
   * The width of thumbnail
   *
   * @default 100
   */
  readonly resizeWidth?: number

  /**
   * Image types
   *
   * @default [ImageTypes.PNG,ImageTypes.JPEG]
   */
  readonly imageTypes?: ImageTypes[]
}

/**
 * S3Thumbnail implement the architecture of users upload image to s3 bucket,
 * it will triiger a lambda function, the lambda function will generate
 * thumbnails, finally the lambda function will upload thumbnails to s3
 * destination bucket
 *
 * @throws {Error} Bucket is empty string
 * @throws {Error} ResizedWidth must between 1 and 300
 * @throws {Error} No image types
 */
export class S3Thumbnail extends Construct {
  /**
   * Upload bucket
   */
  public readonly bucket: Bucket

  /**
   * Resized bucket
   */
  public readonly destBucket: Bucket

  /**
   * Lambda function handler
   */
  public readonly handler: NodejsFunction

  constructor(scope: Construct, id: string, props: S3ThumbnailStackProps) {
    super(scope, id)

    const bucketName = props.bucketName
    const destBucketName = bucketName + "-resized"
    if (bucketName.length == 0) {
      throw new Error("Bucket is empty string")
    }

    const resizWidth = props?.resizeWidth || 100
    if (resizWidth < 1 || resizWidth > 300) {
      throw new Error("ResizedWidth must between 1 and 300")
    }

    const supportImageTypes = props?.imageTypes || [
      ImageTypes.PNG,
      ImageTypes.JPEG,
    ]
    if (supportImageTypes.length == 0) {
      throw new Error("No image types")
    }

    this.bucket = new Bucket(this, "bucket", {
      bucketName: bucketName,
      removalPolicy: RemovalPolicy.DESTROY,
      // NOTICE: in real-world application don't auto delete objects
      autoDeleteObjects: true,
    })

    this.destBucket = new Bucket(this, "destBucket", {
      bucketName: destBucketName,
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    })

    this.handler = new NodejsFunction(this, "thumbnail", {
      runtime: Runtime.NODEJS_18_X,
      entry: path.join(__dirname, "../lambda/index.ts"),
      timeout: Duration.minutes(1),
      memorySize: 1024,
      bundling: {
        forceDockerBundling: true,
        nodeModules: ["sharp"],
        esbuildArgs: {
          "--bundle": "",
          "--platform": "node",
        },
      },
      environment: {
        DEST_BUCKET: this.destBucket.bucketName,
        RESIZE_WIDTH: resizWidth.toString(),
        SUPPORT_IMAGE_TYPES: supportImageTypes.toString(),
      } as ThumbnailLambdaEnvs,
      tracing: Tracing.ACTIVE, // enable x-ray
    })

    this.bucket.grantRead(this.handler)
    this.destBucket.grantWrite(this.handler)

    this.bucket.addEventNotification(
      EventType.OBJECT_CREATED,
      new LambdaDestination(this.handler),
    )
  }
}
