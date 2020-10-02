import { printf } from "https://deno.land/std@0.71.0/fmt/printf.ts";

import config from "./config.ts";
import LineGenerator from "./LineGenerator.ts";
import makeFormatter from "./makeFormatter.ts";

const lineGenerator = LineGenerator(config);
const formatter = makeFormatter(config);

for (let data of lineGenerator) {
  printf(formatter(data));
}
