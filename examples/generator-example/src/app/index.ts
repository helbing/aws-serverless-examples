import * as path from "path"
import Generator, {
  GeneratorOptions as BaseGeneratorOptions,
} from "yeoman-generator"
import chalk from "chalk"

export type IAnswers = {
  /**
   * Example name
   */
  name: string
}

export type GeneratorOptions = BaseGeneratorOptions & {
  /**
   * Example base path
   */
  basePath: string

  /**
   * Auto create dir, if set value greater than 0, it means will auto create
   * dir $PWD/{basePath}/{name}, and the template will be generated in this
   * dir
   */
  autoCreateDir: number

  /**
   * Example name
   */
  name: string

  /**
   * Is teting, if set value greater than 0, it means is testing
   */
  isTesting: number
}

export default class extends Generator<GeneratorOptions> {
  constructor(args: string | string[], options: GeneratorOptions) {
    super(args, options)

    this.desc("Generate a example.")

    this.argument("basePath", {
      type: String,
      description: "Create example base path",
      required: false,
      default: "",
    })

    this.argument("autoCreateDir", {
      type: Number,
      description: "Create dir with example name",
      required: false,
      default: 0,
    })
  }

  async prompting() {
    return this.prompt<IAnswers>([
      {
        type: "input",
        name: "name",
        default: "example",
        message: "Enter example name(at least 3 characters):",
        validate: (input: string) => {
          return input.length >= 3
        },
      },
    ]).then((answers: IAnswers) => {
      this.options.name = answers.name
    })
  }

  async writing() {
    type item = {
      // template file
      from: string
      // destination file
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

    let basePath = this.options.basePath
    if (this.options.autoCreateDir != 0) {
      basePath = path.join(this.options.basePath, this.options.name)
    }

    const context = {
      name: this.options.name,
    }

    for (const item of items) {
      const from = this.templatePath(item.from)
      const to = this.destinationPath(path.join(basePath, item.to))

      this.fs.copyTpl(from, to, context)
    }
  }

  async install() {
    if (this.options.isTesting > 0) {
      return
    }
    // install dependences
    this.spawnCommandSync("pnpm", ["install"])
  }

  async end() {
    this.log(chalk.yellow("Thanks for using the generator!"))
  }
}
