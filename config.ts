export default {
  fieldSeparator: ",",
  lineSeparator: "\n",
  lines: { min: 30000, max: 40000 },
  fields: [
    {
      type: "ipv4",
      name: "source",
      config: {
        number: { min: 10, max: 10 },
        distribution: "linear",
      },
    },
    {
      type: "integer",
      name: "size",
    },
    // {
    //   type: "ipv4",
    //   name: "target",
    // },
  ],
};
