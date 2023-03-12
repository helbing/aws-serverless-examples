import { Template } from "aws-cdk-lib/assertions"
import { App, Stack } from "aws-cdk-lib"
import { S3Thumbnail } from "./construct"

describe("Test construct build", () => {
  test("Expect throw Error, Bucket is empty string", () => {
    expect(() => {
      new S3Thumbnail(new Stack(), "TestConstruct", {
        bucketName: "",
      })
    }).toThrow(new Error("Bucket is empty string"))
  })

  test("Expect throw Error, ResizedWidth must between 1 and 300", () => {
    expect(() => {
      new S3Thumbnail(new Stack(), "TestConstruct", {
        bucketName: "demo",
        resizeWidth: -1,
      })
    }).toThrow(new Error("ResizedWidth must between 1 and 300"))
  })

  test("Expect throw Error, No image types", () => {
    expect(() => {
      new S3Thumbnail(new Stack(), "TestConstruct", {
        bucketName: "demo",
        imageTypes: [],
      })
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
