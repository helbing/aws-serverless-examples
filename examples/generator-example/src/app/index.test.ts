/* eslint-disable jest/expect-expect */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/default */
import path from "path"
import helpers from "yeoman-test"
import assert from "yeoman-assert"
import { rimraf } from "rimraf"
import { IAnswers } from "./index"

describe("generator test", () => {
  describe("test", () => {
    beforeEach(async () => {
      await helpers
        .run(path.join(__dirname, "../../generators/app/"))
        .inDir(path.join(__dirname, "tmp"))
        .withPrompts({
          name: "test",
        } as IAnswers)
    })

    afterEach(() => {
      rimraf.sync(path.join(__dirname, "tmp"))
    })

    test("runs correctly", () => {
      const templates = [
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

      for (const tempalte of templates) {
        assert.file(path.join(__dirname, `tmp/${tempalte}`))
      }
    })
  })
})
