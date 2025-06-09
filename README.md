[![CircleCI](https://dl.circleci.com/status-badge/img/gh/ericmeyer/brulee/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/ericmeyer/brulee/tree/main)
![NPM Version](https://img.shields.io/npm/v/brulee?color=green)

# Brulee

Crème brûlée is a delightful custard with a burnt sugar topping.

## Usage

### NPM

```bash
npm install brulee --save
```

### Yarn

```bash
yarn add brulee
```

## Development

1. Clone repo:

    ```bash
    git clone git@github.com:ericmeyer/brulee.git
    ```

2. Install packages:

    ```bash
    npm install
    ```

3. Run checks:

    ```bash
    npm run verify
    ```

## Releasing a New Version

1. Commit all code changes.
2. Update the version number in `package.json`.
3. Update the changelog.
4. Build:

    ```bash
    npm run build
    ```

5. Commit dist files and merge to main.
6. Publish package:

    ```bash
    npm publish
    ```
