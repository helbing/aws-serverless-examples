# AWS Serverless Examples

## Requirements

- [AWS Account](https://aws.amazon.com/)
- [AWS CLI](https://aws.amazon.com/cli/)
- [Docker](https://www.docker.com/)

You need set `AWS Access Key ID` and `AWS Secret Access Key` in your local with `aws configure`. You also need set environment variables `CDK_DEPLOY_ACCOUNT` and `CDK_DEPLOY_REGION`.

In order to make Docker run, you should set the following environment variables:

```shell
DOCKER_BUILDKIT=0
DOCKER_SCAN_SUGGEST=0
```

## Examples

- [s3-thumbnail](examples/s3-thumbnail/): upload image to S3 bucket, trigger lambda function, it will generate thumbnail and upload thumbnail to destination bucket.
