import * as path from "path"
import Generator, {
  GeneratorOptions as BaseGeneratorOptions,
} from "yeoman-generator"
import chalk from "chalk"

export type IAnswers = {
  // Example name
  name: string
}

export type GeneratorOptions = BaseGeneratorOptions & {
  // Example base path
  basePath: string

  // Example name
  name: string
}

export default class extends Generator<GeneratorOptions> {
  constructor(args: string | string[], options: GeneratorOptions) {
    super(args, options)

    this.desc("Generate a example.")
    this.argument("basePath", {
      description: "Create example base path",
      required: false,
      default: "examples",
    })
  }

  async prompting() {
    return this.prompt<IAnswers>([
      {
        type: "input",
        name: "name",
        default: "example",
        message: "Enter example name:",
      },
    ]).then((answers: IAnswers) => {
      this.options.name = answers.name
    })
  }

  async writing() {
    type item = {
      from: string
      to: string
    }

    const items: item[] = [
      {
        from: "bin/app.ts.ejs",
        to: "bin/app.ts",
      },
      {
        from: "lambda/index.test.ts.ejs",
        to: "lambda/index.test.ts",
      },
      {
        from: "lambda/index.ts.ejs",
        to: "lambda/index.ts",
      },
      {
        from: "lib/construct.test.ts.ejs",
        to: "lib/construct.test.ts",
      },
      {
        from: "lib/construct.ts.ejs",
        to: "lib/construct.ts",
      },
      {
        from: "lib/index.ts.ejs",
        to: "lib/index.ts",
      },
      {
        from: "cdk.json.ejs",
        to: "cdk.json",
      },
      {
        from: "jest.config.ts.ejs",
        to: "jest.config.ts",
      },
      {
        from: "snapshotResolver.ts.ejs",
        to: "snapshotResolver.ts",
      },
      {
        from: "tsconfig.json.ejs",
        to: "tsconfig.json",
      },
    ]

    for (const item of items) {
      this.fs.copyTpl(
        this.templatePath(item.from),
        this.destinationPath(
          path.join(this.options.basePath, this.options.name, item.to),
        ),
      )
    }
  }

  async install() {
    this.packageJson.merge({
      name: "@ase/" + this.options.name,
      version: "0.0.0",
      scripts: {
        cdk: "cdk",
        test: "jest --detectOpenHandles",
        testu: "jest --updateSnapshot --detectOpenHandles",
        "test:integ":
          "integ-runner --directory tests -l typescript --parallel-regions $CDK_DEPLOY_REGION --update-on-failed -v",
      },
      author: "helbing",
      license: "MIT",
    })

    this.addDependencies({
      "@aws-sdk/client-s3": "^3.288.0",
      "@aws-sdk/types": "^3.272.0",
      "aws-cdk": "^2.68.0",
      "aws-cdk-lib": "^2.68.0",
      "aws-lambda": "^1.0.7",
      constructs: "^10.1.273",
      "source-map-support": "^0.5.21",
      "ts-node": "^10.9.1",
    })

    this.addDevDependencies({
      "@ase/tsconfig": "workspace:^0.0.0",
      "@aws-cdk/integ-runner": "^2.68",
      "@aws-cdk/integ-tests-alpha": "^2.68.0-alpha.0",
      "@types/aws-lambda": "^8.10.111",
      "@types/jest": "^29.4.0",
      "@types/node": "^18.15.0",
      "@types/source-map-support": "^0.5.6",
      "aws-sdk-client-mock": "^2.1.0",
      jest: "^29.5.0",
      "jest-circus": "^29.5.0",
      "jest-config": "^29.5.0",
      "jest-mock-extended": "^3.0.3",
      "jest-snapshot": "^29.5.0",
      "ts-jest": "^29.0.5",
      typescript: "^4.9.5",
    })
  }

  async end() {
    this.log(chalk.yellow("Thanks for using the generator!"))
  }
}
