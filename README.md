# validity-validate-if-property-set

Validate the current property if another property is set.

E.g you have a URL property of a schema, which is not a required field.
You only want to apply validation to that field if another field has a value.

## Installation

```
npm install validity-validate-if-property-set --save
```

## Usage

Below is a simple example for usage with schemata and save:

```js
var validity = require("@clocklimited/validity"),
  schemata = require("schemata"),
  save = require("save"),
  collection = save("author"),
  validateIfPropertySet = require("@clocklimited/validity-validate-if-property-set");

var schema = schemata({
  useLink: { type: Boolean },
  url: {
    type: String,
    validators: { all: [validateIfPropertySet("useLink", validity.url)] },
  },
});
```

## Credits

[Adam Duncan](https://github.com/microadam/)
