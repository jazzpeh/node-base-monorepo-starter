# Node Typescript Monorepo Starter

A simple and easy to use typescript monorepo configured for Node. This monorepo uses `lerna` and `yarn workspaces` to orchestrate the monorepo.

## Table of Contents

1. [Adding new dependencies](#adding-new-dependencies)
2. [Adding new packages](#adding-new-packages)
3. [Custom scripts commands](#custom-scripts-command)

---

---

## <a name="adding-new-dependencies"></a> Adding new NPM dependencies

| Command                                    | Description                                                                                                |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| `yarn add <dependency> -W`                 | Adds the NPM dependency **to the root package to be used across all packages**.                            |
| `lerna add <dependency>`                   | Adds the NPM dependency to **ALL** packages.                                                               |
| `lerna add <dependency> --scope=<package>` | Adds the NPM dependency **to a specific package**                                                          |
| `lerna add <package> --scope=<package>`    | Adds a **local package as a dependency into another specific package**. Should run `yarn bootstrap` first. |

---

---

## <a name="adding-new-packages"></a> Adding new packages

| Command                  | Description                             |
| ------------------------ | --------------------------------------- |
| `lerna create <package>` | Creates a new package under `/packages` |

## <a name ="running-packages"> Running packages

| Command                             | Description                                                                       |
| ----------------------------------- | --------------------------------------------------------------------------------- |
| `lerna run start --scope=<package>` | Run the `start` command that is available in a specific package under `/packages` |

## <a name="custom-script-commands"> Custom Scripts Command

These commands are added to `package.json` as a easy way to run certain combination of commands together.

| Command         | Description                                                                                                                                           |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `yarn setup`    | Useful when the monorepo already has dependencies installed and the intention is to reset and reinstall everything.                                   |
| `yarn build`    | Runs all `build` command that is available in the packages, typically to compile typescripts.                                                         |
| `yarn boostrap` | As the packages are supposed to be typesripts, this command runs `yarn tsc` first and then `lerna bootstrap` to bootstrap everything together nicely. |
| `yarn lint`     | Runs all `lint` command that is available in the packages in parallel.                                                                                |
| `yarn start`    | Runs all `start` comamnd that is available in the packages in parallel.                                                                               |
| `yarn clean`    | Runs all `start` comamnd that is available in the packages.                                                                                           |
| `yarn reset`    | Runs `yarn clean` and `lerna clean` to clean out the monorepo.                                                                                        |
