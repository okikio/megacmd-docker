export default {
  fieldSeparator: ",",
  lineSeparator: "\n",
  lines: { min: 40000, max: 50000 },
  fields: [
    {
      type: "datetime",
      name: "timestamp",
      config: {
        startDate: "2022-12-01",
        step: { min: 0, max: 100000 },
      },
    },
    {
      type: "ipv4",
      name: "source",
      config: {
        number: { min: 100, max: 1000 },
        distribution: "uniform",
      },
    },
    {
      type: "ipv4",
      name: "target",
      config: {
        number: { min: 10, max: 20 },
        distribution: "linear",
      },
    },
    {
      type: "integer",
      name: "size",
      config: {
        number: { max: 1500 },
      },
    },
    {
      type: "element",
      name: "protocol",
      config: {
        list: ["TCP", "UDP"],
      },
    },
  ],
};