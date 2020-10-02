import { getInteger } from "../random/number.ts";
import { getIPv4 } from "../random/ip.ts";

export default function* ({ number = 100, distribution = "uniform" } = {}) {
  const realNumber = getInteger(number);
  const addresses = new Array(realNumber).fill(0).map((x) => getIPv4());

  while (true) {
    const ipAddress = addresses[getInteger({ max: realNumber, distribution })];
    yield ipAddress;
  }
}
