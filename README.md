# uid-by-name

This package provides a utility function for retrieving a user's UID by their
name. You can also install it globally to make it available as a command.

## Install

```sh
# With yarn (locally)
yarn add uid-by-name;

# With yarn (globally)
yarn global add uid-by-name;

# With npm (locally)
npm install uid-by-name;

# With npm (globally)
npm install -g uid-by-name;
```

## Usage

The module returns a single function that accepts a username. It returns the UID
if the user exists or undefined otherwise.

With TypeScript / ES modules:

```ts
import getUidbyName from "uid-by-name";

console.log(getUidByName("some-user"));
```

With CommonJS:

```js
var getUidbyName = require("uid-by-name");

console.log(getUidByName("some-user"));
```

## CLI usage

Once installed globally, the CLI tool accepts any number of usernames as
parameters and prints out the UID for each one in a new line. If a user does not
exist, an empty line is printed.

```sh
uid-by-name some-user some-other-user;
```

## License

[MIT](LICENSE)
