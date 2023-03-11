/* eslint-disable jest/expect-expect */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/default */
import path from "path"
import helpers from "yeoman-test"
import assert from "yeoman-assert"
import { rimraf } from "rimraf"
import { IAnswers, GeneratorOptions } from "./index"

describe("Test generate", () => {
  const name = "test"

  beforeAll(async () => {
    await helpers
      .run(path.join(__dirname, "../../generators/app"))
      .inDir(path.join(__dirname, "tmp"))
      .withOptions({
        isTesting: 1,
      } as GeneratorOptions)
      .withPrompts({
        name: name,
      } as IAnswers)
  })

  afterAll(() => {
    rimraf.sync(path.join(__dirname, "tmp"))
  })

  const files = [
    "bin/app.ts",
    "lambda/index.test.ts",
    "lambda/index.ts",
    "lib/construct.test.ts",
    "lib/construct.ts",
    "lib/index.ts",
    "cdk.json",
    "jest.config.ts",
    "package.json",
    "snapshotResolver.ts",
    "tsconfig.json",
  ]

  for (const file of files) {
    test(`Expect ${file} exist`, () => {
      assert.file(path.join(__dirname, `tmp/${file}`))
    })
  }

  test("Expect package.json have correct name", () => {
    assert.fileContent(
      path.join(__dirname, "tmp/package.json"),
      `"name": "@ase/${name}"`,
    )
  })
})

describe("Test generate with autoCreateDir", () => {
  const basePath = "examples"
  const name = "test"

  beforeAll(async () => {
    await helpers
      .run(path.join(__dirname, "../../generators/app"))
      .inDir(path.join(__dirname, "tmp"))
      .withOptions({
        isTesting: 1,
      } as GeneratorOptions)
      .withArguments([basePath, "true"])
      .withPrompts({
        name: name,
      } as IAnswers)
  })

  afterAll(() => {
    rimraf.sync(path.join(__dirname, "tmp"))
  })

  const prefixPath = path.join(basePath, name)

  const files = [
    "bin/app.ts",
    "lambda/index.test.ts",
    "lambda/index.ts",
    "lib/construct.test.ts",
    "lib/construct.ts",
    "lib/index.ts",
    "cdk.json",
    "jest.config.ts",
    "package.json",
    "snapshotResolver.ts",
    "tsconfig.json",
  ]

  for (const file of files) {
    test(`Expect ${prefixPath}/${file} exist`, () => {
      assert.file(path.join(__dirname, "tmp", prefixPath, file))
    })
  }

  test(`Expect ${prefixPath}/package.json have correct name`, () => {
    assert.fileContent(
      path.join(__dirname, "tmp", prefixPath, "package.json"),
      `"name": "@ase/${name}"`,
    )
  })
})
