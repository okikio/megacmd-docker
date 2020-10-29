[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/fknipp/fake-log-generator)

# fake-log-generator
Generates fake logs with configurable statistical characteristics

## Configuration

Configuration takes place in `config.ts`, which exports the configuration object.

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `format` | String | `undefined` | A format string as used in `printf` (see [std/fmt](https://deno.land/std@0.75.0/fmt) for details) |
| `fieldSeparator` | String | `","` | The field separator string (if `format` is undefined) |
| `lineSeparator` | String | `"\n"` | The line separator string (if `format` is undefined) |
| `lines` | Number \|\| NumberConfig | `10` | The number of lines to generate |
| `fields` | Array | `undefined` | The array of fields |

Numeric fields as `lines` can be given as a number as well as a NumberConfig object:

```javascript
   {
     min: 0,                  // inclusive
     max: 10,                 // exclusive
     distribution: 'uniform', // or linear, so the max value appears more often
   }
```

## Field definitions

Every field is defined by an object.

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `type` | String | `undefined` | The type of this field, e.g. `integer` |
| `name` | String | `undefined` | A name for this field, for future use |
| `config` | Object | `undefined` | The configuration for this field, dependent of the `type` |

## Field types

### datetime

Generates consecutive timestamps, starting at `startDate` as configured in the configuration oject.

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `startDate` | String | `"2020-01-01"` | A parseable date to start from |
| `step` | Number \|\| NumberConfig | `{ min: 0, max: 1000 }` | The step in milliseconds between every generated timestamp |
| `format` | String | `"toISOString"` | A date format as defined in [std/datetime](https://deno.land/std@0.75.0/datetime) or `toISOString` to call [Date.prototype.toISOString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString) |

### element

Takes a random element from the given `list`.

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `list` | Array | `["A", "B", "C"]` | The list of elements |

### integer

Generates a random integer.

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| number | Number \|\| NumberConfig | `{ min: 0, max: 256 }` | The constant number or the information to generate a random number |

### ipv4

Generates a list of `number` IPv4 addresses and takes one of the list for every line.

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `number` | Number \|\| NumberConfig | `100` | The number of different IP addresses |
| `distribution` | String | `"uniform"` | The distribution of the IP addresses |

## Run the log generator

After configuring the log file format in `config.ts`, the generator can be started using

    deno run generate

## A personal note about this project

I implemented this to generate fake log files for the exams of my students. It is their task to analyze them with the utilities available at the Linux shell, like `grep`, `sort`, `uniq`, `wc`.

A number of log files as well as the configuration to produce them are in the `generated` directory.

Furthermore, the project allowed me to get to know a number of new technologies and to try them:

* [Deno](https://deno.land): I'm a passionate JavaScript coder and liked it from the start.
* [TypeScript](https://www.typescriptlang.org/): I'm still not sure about it, but it leads to a cleaner code, at it didn't allow me to access member methods using brackets. See the `toISOString` format above.
* [Gitpod](https://www.gitpod.io/): The future of applications is the web, so go for it. Using Gitpod allowed me to change my PC without the need to re-setup my development environment (at least for this project).

Have fun using this project. Send me a message on [Twitter](https://twitter.com/fknipp), if you like it. PRs are welcome.