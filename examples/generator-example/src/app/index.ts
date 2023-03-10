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
        from: "package.json.ejs",
        to: "package.json",
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
        this.options,
      )
    }
  }

  async end() {
    this.log(chalk.yellow("Thanks for using the generator!"))
  }
}
