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
const { NavigateToEsignet } = require('mosip-esignet-login-button');

# using import
import { NavigateToEsignet } from 'mosip-esignet-login-button';
```

## Example

```js
<NavigateToEsignet esignet_url={uri_UI}/>
```