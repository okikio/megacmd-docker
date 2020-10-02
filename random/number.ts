interface NumberConfig {
  min?: number;
  max?: number;
  distribution?: string;
}

export type NumberOrNumberConfig = number | NumberConfig;

interface Functions {
  [index: string]: (x: number) => number;
}

const functions: Functions = {
  uniform: (x) => x,
  linear: (x) => Math.sqrt(x),
};

export function getNumber(config: NumberOrNumberConfig) {
  if (typeof config === "number") {
    return config;
  }

  const { min = 0, max = 1, distribution = "uniform" } = config;

  const weightedRandom = functions[distribution](Math.random());
  return min + (max - min) * weightedRandom;
}

export function getInteger(config: NumberOrNumberConfig) {
  return Math.floor(getNumber(config));
}
