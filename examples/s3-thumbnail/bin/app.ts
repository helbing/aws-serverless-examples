#!/usr/bin/env node

import "source-map-support/register"
import * as cdk from "aws-cdk-lib"
import CDKStack from "../lib/index"

const app = new cdk.App()

new CDKStack(app, "AWSServerlessExamplesS3Thumbnail", {
  env: {
    account: process.env.CDK_DEPLOY_ACCOUNT || process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEPLOY_REGION || process.env.CDK_DEFAULT_REGION,
  },
})
