import { getInteger } from "../random/number.ts";

export default function* (
  { number = { min: 0, max: 256 } } = {},
) {
  while (true) {
    const myNumber = getInteger(number);
    yield myNumber;
  }
}
