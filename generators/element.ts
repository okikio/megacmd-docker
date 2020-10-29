import { getInteger } from "../random/number.ts";

export default function* (
  { list = ["A", "B", "C"] } = {},
) {
  while (true) {
    const index = getInteger({ min: 0, max: list.length });
    yield list[index];
  }
}
