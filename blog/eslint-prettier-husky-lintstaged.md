---
path: how-to-integrate-eslint-prettier-husky-lintstaged
date: 2020-10-30T03:14:24.704Z
title: How to Integrate ESLint + Prettier + Husky + Lint Staged
description: Integrating the most useful development tools for JavaScript projects
---

## Recommended guides:

- [How to Setup ESLint and Prettier for Your React Apps](https://thomlom.dev/setup-eslint-prettier-react/)
- [Extend “Create React App” with AirBnB’s ESLint config, Prettier, Flow and React Testing Library.](https://medium.com/@pppped/extend-create-react-app-with-airbnbs-eslint-config-prettier-flow-and-react-testing-library-96627e9a9672)

## Installing dependencies

- [Installing ESLint](https://eslint.org/docs/user-guide/getting-started)

- [Installing Airbnb's ESLint rules ](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)

- [Installing Prettier](https://prettier.io/docs/en/install.html)
- [Installing Husky and Lint Staged](https://github.com/okonet/lint-staged)

## ESLint

ESLint will make sure you write code without syntax errors.

Create `.eslintrc` (or use package.json) and add:

```
{
  "extends": ["react-app", "airbnb", "airbnb/hooks"],
  "rules": {
    "semi": ["error", "never"],
    "jsx-quotes": ["error", "prefer-single"],
    "comma-dangle": ["error", "never"],
    "arrow-parens": ["error", "as-needed"],
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }]
  }
}
```

You can add this if you have to ignore `serviceWorker.js`:

```
"ignorePatterns": [
  "src/serviceWorker.js"
],
```

I also recommend you to install ESLint's extension on Visual Studio Code to better visualize the errors and warnings.

## Prettier

Prettier is an **opinionated** code formatter.

I don't like to integrate Prettier with ESLint. I'm using Prettier to format `.json, .scss and .md` files. You don't need to setup anything if you just want to format those files instead of formating `.js` files.

## Husky

Husky can run commands upon commits, pushes etc.

Create `.huskyrc.json` (or use package.json) and add:

```
{
  "hooks": {
    "pre-commit": "lint-staged"
  }
}
```

Husky will run lint-staged before commiting.

## Lint Staged

Instead of running ESLint and Prettier on every file, Lint Staged will make sure only files you changed will be checked. Create `.lintstagedrc.json` (or use package.json) and add:

```
{
  "*.js": "eslint --fix",
  "*.{json,scss,md}": "prettier --single-quote --write"
}
```

ESLint is gonna run on `.js` files and Prettier is gonna run on `.json, .scss and .md` files. You can change this if you need to run different formats.

## That's a wrap!

Using all these tools will make sure you deliver better code in your projects. The only thing left for better development is to **test your code** using tools like `React Testing Library` with `Jest`.
