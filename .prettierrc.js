const config = {
  "endOfLine": "lf",
  // requires @trivago/prettier-plugin-sort-imports
  "importOrder": ["^[./]", "^[../]"],
  "importOrderSeparation": false,
  "importOrderSortSpecifiers": true,
  "importOrderParserPlugins": [
    "typescript",
    "jsx",
    "classProperties",
    "decorators-legacy"
  ],
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all"
}

export default config;
