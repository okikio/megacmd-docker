import { format as dateFormat } from "https://deno.land/std@0.71.0/datetime/mod.ts";
import { getInteger } from "../random/number.ts";

export default function* (
  {
    startDate = "2020-01-01",
    step = { min: 0, max: 1000 },
    format = "toISOString",
  } = {},
) {
  const date = new Date(startDate);

  while (true) {
    date.setTime(date.getTime() + getInteger(step));
    yield format === "toISOString"
      ? date.toISOString()
      : dateFormat(date, format);
  }
}
