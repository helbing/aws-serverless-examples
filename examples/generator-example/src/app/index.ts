import Generator from "yeoman-generator"

type GeneratorOptions = {
  name: string
}

export default class extends Generator<GeneratorOptions> {
  constructor(args: string | string[], options: GeneratorOptions) {
    super(args, options)
  }

  foo() {
    this.log("Hello world 123")
  }
}
