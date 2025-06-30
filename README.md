[![CircleCI](https://dl.circleci.com/status-badge/img/gh/ericmeyer/choux/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/ericmeyer/choux/tree/main)
![NPM Version](https://img.shields.io/npm/v/choux?color=green)

# Choux

Pâte à choux is a delightful pastry which embodies the spirit of wrapping HTTP requests.

## Usage

### NPM

```bash
npm install choux --save
```

### Yarn

```bash
yarn add choux
```

## Development

1. Clone repo:

    ```bash
    git clone git@github.com:ericmeyer/choux.git
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
3. Build:

    ```bash
    npm run build
    ```

4. Commit all changes including dist files and merge to main.
5. Publish package:

    ```bash
    npm publish
    ```
