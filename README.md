![Build](https://travis-ci.org/Geekz45679/fut.js.svg?branch=master) ![Dependencies](https://david-dm.org/Geekz45679/fut.js.svg)
# Fut.js
## **New:** Added getPrice() function, see docs.
**A Simple but powerful module to access the FIFA Ultimate Team player database.**
#### Install using: `npm install fut.js`

### ***[Full documentation](docs/documentation.md)***

### **getPlayer(name: `string`, clean: `boolean`)**: Returns: `Array[Object]`
- **Name**: `String`, the name of the player you would like to search for.
- **Clean**: `Boolean`, (optional, defaults to `true`), if `true` the function returns an array with some of the useless stuff striped away into a neater format, if `false` the function just returns the raw JSON data.

### **Example:**
```js
const fut = require('fut.js');

/* In an ES7 async function */
const somefunction = async () => {
  const players = await fut.getPlayer('Messi', true);
  return console.log(`${players[0].name} | ${players[0].overall}`);
};

/* ES5 Promise */
fut.getPlayer('Messi', true).then((players) => {
  return console.log(`${players[0].name} | ${players[0].overall}`);
}).catch((err) => {
  return console.error(err);
});
```

### **getPrice(id: `string`)**: Returns: `Object`
- **Id:** `String`, has to be a numerical string (ie: `'69420'`), the id of a player which can be grabbed via the `getPlayer()` function, *see the example below*.

## Example:
```js
const fut = require('fut.js');

const somefunction = async () => {
  const player = await fut.getPlayer('Messi', true);
  const price = await fut.getPrice(player[0].info.id);

  console.log(`Price for ${player.info.name} on xbox is around: ${price.xbox.min}`);
};
```