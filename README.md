# Node Typescript Monorepo Starter

A simple and easy to use typescript monorepo configured for Node. This monorepo uses `lerna` and `yarn workspaces` to orchestrate the monorepo.

## Table of Contents

1. [Adding new dependencies](#adding-new-dependencies)
2. [Adding new packages](#adding-new-packages)

---

---

## <a name="adding-new-dependencies"></a> Adding new NPM dependencies

| Command                                    | Description                                                                 |
| ------------------------------------------ | --------------------------------------------------------------------------- |
| `yarn add <dependency> -W`                 | Adds the dependency **to the root package to be used across all packages**. |
| `lerna add <dependency>`                   | Adds the dependency to **ALL** packages.                                    |
| `lerna add <dependency> --scope=<package>` | Adds the dependency **to a specific package**                               |

---

---

## <a name="adding-new-packages"></a> Adding new packages

| Command                  | Description                             |
| ------------------------ | --------------------------------------- |
| `lerna create <package>` | Creates a new package under `/packages` |
