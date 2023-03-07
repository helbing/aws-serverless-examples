import { Template } from "aws-cdk-lib/assertions"
import { App, Stack } from "aws-cdk-lib"
import { S3Thumbnail, S3ThumbnailStackProps } from "./construct"

describe("Test construct build", () => {
  test("Expect throw Error, Bucket is undefined", () => {
    expect(() => {
      new S3Thumbnail(new Stack(), "TestConstruct", {} as S3ThumbnailStackProps)
    }).toThrow(new Error("Bucket is undefined"))
  })

  test("Expect throw Error, ResizedWidth between 1 and 300", () => {
    expect(() => {
      new S3Thumbnail(new Stack(), "TestConstruct", {
        bucketName: "demo",
        resizeWidth: -1,
      } as S3ThumbnailStackProps)
    }).toThrow(new Error("ResizedWidth between 1 and 300"))
  })

  test("Expect throw Error, No image types", () => {
    expect(() => {
      new S3Thumbnail(new Stack(), "TestConstruct", {
        bucketName: "demo",
        imageTypes: [],
      } as S3ThumbnailStackProps)
    }).toThrow(new Error("No image types"))
  })

  test("Expect match snapshot", () => {
    const app = new App()
    const stack = new Stack(app, "TestStack")
    new S3Thumbnail(stack, "TestConstruct", {
      bucketName: "demo",
    })
    const template = Template.fromStack(stack).toJSON()
    // the S3Key value will be changed with build, because we set
    // `nodeModules: ["sharp"]` in NodejsFunction
    expect(template).toMatchSnapshot({
      Resources: {
        TestConstructthumbnail2E204B2A: {
          Properties: {
            Code: {
              S3Key: expect.any(String),
            },
          },
        },
      },
    })
  })
})
