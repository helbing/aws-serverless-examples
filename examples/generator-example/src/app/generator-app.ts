import Generator from "yeoman-generator"

type GeneratorAppOptions = {
  name: string
}

export class GeneratorApp extends Generator<GeneratorAppOptions> {
  constructor(args: string | string[], options: GeneratorAppOptions) {
    super(args, options)

    this.argument("name", {
      required: true,
      type: String,
    })
  }

  foo() {
    this.log("Hello world")
  }
}
