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
    this.sourceRoot()
  }

  async install() {
    console.log("installing")
  }

  async end() {
    this.log(chalk.yellow("Thanks for using the generator!"))
  }
}
