#!/usr/bin/env ts-node

import "source-map-support/register"
import { App } from "aws-cdk-lib"
import CDKStack from "../lib/index"

const app = new App()

new CDKStack(app, "AWSServerlessExamplesS3Thumbnail", {
  env: {
    account: process.env.CDK_DEPLOY_ACCOUNT || process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEPLOY_REGION || process.env.CDK_DEFAULT_REGION,
  },
})
