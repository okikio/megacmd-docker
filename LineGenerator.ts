import FieldGenerator, { Field } from "./FieldGenerator.ts";
import { getInteger, NumberOrNumberConfig } from "./random/number.ts";

interface Config {
  lines: NumberOrNumberConfig;
  fields: Field[];
}

function* LineGenerator(config: Config) {
  const { lines = 10, fields } = config;
  const fieldGenerators = fields.map((f) => FieldGenerator(f));

  const realLines = getInteger(lines);

  for (let i = 0; i < realLines; i++) {
    yield Array.from(fieldGenerators).map((generator) =>
      generator.next().value
    );
  }
}

export default LineGenerator;
