import { App } from "aws-cdk-lib"
import {
  IntegTest,
  IntegTestCaseStack,
  ExpectedResult,
} from "@aws-cdk/integ-tests-alpha"

const app = new App()
const testCase = new IntegTestCaseStack(app, "IntegTestCaseStack", {
  env: {
    account: process.env.CDK_DEPLOY_ACCOUNT || process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEPLOY_REGION || process.env.CDK_DEFAULT_REGION,
  },
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

integ.assertions
  .invokeFunction({
    functionName: "test-lambda",
  })
  .expect(ExpectedResult.stringLikeRegexp("Hello world"))

app.synth()
