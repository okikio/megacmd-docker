import { getInteger } from "./number.ts";

const numberConfig = { min: 0, max: 256 };

export function getIPv4() {
  return `${getInteger({ min: 1, max: 224 })}.${getInteger(numberConfig)}.${
    getInteger(numberConfig)
  }.${getInteger(numberConfig)}`;
}
