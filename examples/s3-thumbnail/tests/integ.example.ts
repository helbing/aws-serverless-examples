import * as fs from "fs"
import * as path from "path"
import { App } from "aws-cdk-lib"
import {
  IntegTest,
  IntegTestCaseStack,
  ExpectedResult,
} from "@aws-cdk/integ-tests-alpha"
import { S3Thumbnail } from "../lib/construct"

const app = new App()
const testCase = new IntegTestCaseStack(app, "IntegTestCaseStack", {
  diffAssets: true,
  stackUpdateWorkflow: true,
})
const thumbnail = new S3Thumbnail(testCase, "TestConstruct", {
  bucketName: "aws-serverless-examples-s3-thumbnail-bucket",
})

const integ = new IntegTest(app, "integ-test", {
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
    bucket: thumbnail.bucket.bucketName,
    key: "test.png",
    body: buffer,
    contentType: "image/png",
  })
  .next(
    integ.assertions
      .awsApiCall("S3", "getObject", {
        bucket: thumbnail.destBucket.bucketName,
        key: "test.png",
      })
      .expect(
        ExpectedResult.objectLike({
          body: expectBuffer,
        }),
      ),
  )

app.synth()
