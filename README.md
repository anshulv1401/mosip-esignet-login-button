# mosip-esignet-login-button

Renders a button that will navigate the user to esignet website for authentication. Follows Open Id connect protocol.

## Installation

```js
# using npm
npm install mosip-esignet-login-button

# using yarn
yarn add mosip-esignet-login-button
```

## Usage

```js
# using require
const { getRepos } = require('mosip-esignet-login-button');

# using import
import { getRepos } from 'mosip-esignet-login-button';
```

## Example

### Using promises:

```js
getRepos({
  username: 'gaearon', // provide GitHub username here
  page: 1, // optional property: default value is 1
  per_page: 50 // optional property: default value is 30
}).then((repositories) => console.log(repositories));
```

### Using async/await:

```js
const getRepositories = async function () {
  const repositories = await getRepos({
    username: 'gaearon', // provide GitHub username here
    page: 1, // optional property: default value is 1
    per_page: 50 // optional property: default value is 30
  });
  console.log(repositories);
};

getRepositories();
```