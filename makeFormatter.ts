import { sprintf } from "https://deno.land/std@0.71.0/fmt/printf.ts";

interface Config {
  fieldSeparator: string;
  lineSeparator: string;
  format?: string;
}

function makeFormatter(
  { fieldSeparator = ",", lineSeparator = "\n", format }: Config,
) {
  return (data: any[]) => {
    if (format) {
      return sprintf(format, ...data);
    } else {
      return sprintf(`%s${lineSeparator}`, data.join(fieldSeparator));
    }
  };
}

export default makeFormatter;
