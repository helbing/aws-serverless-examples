import * as fs from "fs"
import * as path from "path"
import { App } from "aws-cdk-lib"
import {
  IntegTest,
  IntegTestCaseStack,
  ExpectedResult,
} from "@aws-cdk/integ-tests-alpha"
import {
  GetObjectCommandInput,
  GetObjectCommandOutput,
  PutObjectCommandInput,
} from "@aws-sdk/client-s3"
import { SdkStream } from "@aws-sdk/types"
import { Readable } from "stream"
import { S3Thumbnail } from "../lib/construct"

const app = new App()
const testCase = new IntegTestCaseStack(app, "IntegTestCaseStack", {
  diffAssets: true,
  stackUpdateWorkflow: true,
  env: {
    account: process.env.CDK_DEPLOY_ACCOUNT || process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEPLOY_REGION || process.env.CDK_DEFAULT_REGION,
  },
})
const thumbnail = new S3Thumbnail(testCase, "TestConstruct", {
  bucketName: "aws-serverless-examples-integ-test-s3-thumbnail-bucket",
})

const integ = new IntegTest(app, "IntegTest", {
  testCases: [testCase],
  cdkCommandOptions: {
    deploy: {
      args: { json: true },
    },
    destroy: {
      args: { force: true },
    },
  },
})

const buffer = fs.readFileSync(path.join(__dirname, "./testdata/test.png"))
const expectBuffer = fs.readFileSync(
  path.join(__dirname, "./testdata/test-thumbnail.png"),
)

integ.assertions
  .awsApiCall("S3", "putObject", {
    Bucket: thumbnail.bucket.bucketName,
    Key: "test.png",
    Body: buffer,
    ContentType: "image/png",
  } as PutObjectCommandInput)
  .next(
    integ.assertions
      .awsApiCall("S3", "getObject", {
        Bucket: thumbnail.destBucket.bucketName,
        Key: "test.png",
      } as GetObjectCommandInput)
      .expect(
        ExpectedResult.objectLike({
          Body: expectBuffer as unknown as SdkStream<Readable>,
        } as GetObjectCommandOutput),
      ),
  )

app.synth()
