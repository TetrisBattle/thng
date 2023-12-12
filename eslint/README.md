# eslint-plugin-thng

## Installation

Install `eslint-plugin-thng`:

```sh
npm install eslint-plugin-thng --save-dev
```

## Usage

Add `thng:recommended` to the `eslintConfig` section of your `package.json` file.

```json
    "eslintConfig": {
        "extends": "plugin:thng/recommended"
    },
```

### Alternative

Add `thng:recommended` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": ["thng:recommended"]
}
```
