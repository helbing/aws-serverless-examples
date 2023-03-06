import { Stack, StackProps } from "aws-cdk-lib"
import { Construct } from "constructs"
import { S3Thumbnail } from "./construct"

export default class CDKStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    new S3Thumbnail(this, "s3-thumbnail", {
      bucketName: "aws-serverless-examples-s3-thumbnail-bucket",
    })
  }
}
