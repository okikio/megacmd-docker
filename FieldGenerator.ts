import generators from "./generators/index.ts";

export interface Field {
  type: string;
  name?: string;
  config?: object;
}

function* FieldGenerator(f: Field) {
  const generator = generators[f.type](f.config);

  while (true) {
    const value = generator.next().value;
    yield value;
  }
}

export default FieldGenerator;
