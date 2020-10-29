import integer from "./integer.ts";
import ipv4 from "./ipv4.ts";

interface Generators {
  [index: string]: (config: any) => any;
}

const generators: Generators = { integer, ipv4 };

export default generators;
