---
path: husky-eslint
date: 2020-06-01T03:40:09.999Z
title: ESLint + Husky
description: Guide about integrating Husky and ESLint in your next project
---
## 1. Install Husky:

```sh
# Yarn:
$ yarn add --dev husky

# NPM:
$ npm install --save-dev husky
```

## 2. Configure Husky:

on package.json

```json
"husky": {
  "hooks": {
    "pre-commit": "eslint src/"
  }
}
```

## 3. Install ESLint:

### CLI (automatically):

```sh
$ yarn add eslint --dev
$ yarn eslint --init
```

### Manually:

### - React Native:

```sh
# Yarn:
$ yarn add --dev eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks

# NPM:
$ npm install --save-dev eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```

### - React:

```sh
# Yarn:
$ yarn add --dev eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react

# NPM:
$ npm install --save-dev eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
```
    
### - Node:

```sh
# Yarn:
$ yarn add --dev eslint eslint-config-airbnb eslint-plugin-import

# NPM:
$ npm install --save-dev eslint eslint-config-airbnb eslint-plugin-import
```

## 4. ESLint config:

### - React Native:

.eslintrc.js

```js
module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  settings: {
    "import/parser": "babel-eslint",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js']
      }
    ],
    'import/prefer-default-export': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
    'no-use-before-define': 'off',
    'react/destructuring-assignment': 'off',
    'consistent-return': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'off',
    'max-len': ['error', { 'code': 115 }]
  },
};

```

### - React:

.eslintrc.json

```json
{
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "plugin:react/recommended",
    "airbnb"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "babel-eslint",
  "settings": {
    "import/parser": "babel-eslint"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "object-curly-newline": [
      "error",
      {
        "ObjectExpression": "always",
        "ObjectPattern": {
          "multiline": true,
          "minProperties": 4
        },
        "ImportDeclaration": {
          "multiline": true,
          "minProperties": 4
        },
        "ExportDeclaration": {
          "multiline": true,
          "minProperties": 3
        }
      }
    ],
    "no-underscore-dangle": "off",
    "max-len": ["error", { "code": 125 }],
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    "react/state-in-constructor": "off"
  }
}
```

### - Gatsby:

.eslintrc

```
{
  "extends": "airbnb",
  "parser": "babel-eslint",
  "settings": {
    "import/resolver": {
      "node": {
        "paths": [
          "src"
        ]
      }
    }
  },
  "rules": {
    "max-len": [
      "error",
      {
        "code": 80,
        "ignoreUrls": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true
      }
    ],
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "react/forbid-prop-types": "off",
    "react/state-in-constructor": [
      "off",
      "never"
    ],
    "object-curly-newline": [
      "error",
      {
        "ObjectExpression": "always",
        "ObjectPattern": {
          "multiline": true
        },
        "ImportDeclaration": "never",
        "ExportDeclaration": {
          "multiline": true,
          "minProperties": 3
        }
      }
    ]
  }
}
```

### - Node:

.eslintrc.json

```json
{
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "airbnb-base"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
      "no-console": "off",
      "consistent-return": "off",
      "no-underscore-dangle": "off",
      "no-unused-vars": "off",
      "prefer-promise-reject-errors": "off"
    }
}
```
