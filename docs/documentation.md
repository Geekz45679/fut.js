![Build](https://travis-ci.org/Geekz45679/fut.js.svg?branch=master) ![Dependencies](https://david-dm.org/Geekz45679/fut.js.svg) [![npm version](https://badge.fury.io/js/fut.js.svg)](https://badge.fury.io/js/fut.js)
# Fut.js
[![npm](https://nodei.co/npm/fut.js.png)](https://nodei.co/npm/fut.js/)

---
### **getPrice(id: `string`)**: Returns: `Object`
- **Id:** `String`, has to be a numerical string (ie: `'69420'`), the id of a player which can be grabbed via the `getPlayer()` function, *see the example below*.

### **Example:**
```js
const fut = require('fut.js');

const somefunction = async () => {
  const player = await fut.getPlayer('Messi', true);
  const price = await fut.getPrice(player[0].info.id);

  console.log(`Price for ${player.info.name} on xbox is around: ${price.xbox.min}`);
};
```

### **Contents of data:**

| Item: | Type:                                                           | Description:       |
|-------|-----------------------------------------------------------------|--------------------|
| pc    | `Object(min: number, max: number)`, Reference using `pc.min`.   | The price on PC.   |
| xbox  | `Object(min: number, max: number)`, Reference using `xbox.min`. | The price on Xbox. |
| ps    | `Object(min: number, max: number)`, Reference using `ps.min`.   | The price on PS.   |

---
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

### **Contents of clean data:**
Info, the information of the player, **(Reference an item using: `<player>.info.<itemname>`)**:

| Item:        | Type:  | Description:                                           |
|--------------|--------|--------------------------------------------------------|
| name         | `String` | The name of the player.                                |
| birthdate    | `String` | The birthdate of the player, in MM/DD/YYYY format.     |
| position     | `String` | The abbreviation of the player's position. (e.g. ST)   |
| positionName | `String` | The full name of the player's position. (e.g. Striker) |
| age          | `Number` | The age of the player.                                 |
| weight       | `Number` | The weight of the player, in metric KGs.               |
| height       | `Number` | The height of the player, measured in CM.              |
| foot         | `String` | The player's preferred foot.                           |
| club         | `String` | The name of the player's club.                         |
| nation       | `String` | The name of the player's national team.                |
| league       | `String` | The name of the player's league.                       |
| headshot     | `URL` | The URL for the player's headshot image.               |
| id           | `String` | The ID of the card in the FUT database.                |
| baseId       | `Number` | The ID of the base card in the FUT database.           |

#### Stats, the skill statistics of the player, **(Reference an item using: `<player>.skills.<itemname>`)**:

| Item:            | Type:                        | Description:                                                                                                      |
|------------------|------------------------------|-------------------------------------------------------------------------------------------------------------------|
| overall          | `Number`                       | The player's overall rating.                                                                                      |
| workrates        | `Object(Attacking, Defensive)` | The player's work rates. Access using `workrates.attacking` or `workrates.defensive`.                             |
| weakfoot         | `Number`                       | The player's weak foot rating.                                                                                    |
| skillmoves       | `Number`                       | The player's skill move rating.                                                                                   |
| specialties      | `Array(String)`                | The specialties of the player in an array of strings.                                                             |
| traits           | `Array(String)`                | The traits of the player in an array of strings.                                                                  |
| attributes       | `Array(Object(Name, Value))`   | The player's attributes, for example PAC (Pace): 81. Access using `attributes[x].name` and `attributes[x].value`. |
| composure        | `Number`                       | The player's composure rating.                                                                                    |
| acceleration     | `Number`                       | The player's acceleration rating.                                                                                 |
| aggression       | `Number`                       | The player's aggression rating.                                                                                   |
| agility          | `Number`                       | The player's agility rating.                                                                                      |
| balance          | `Number`                       | The player's balance rating.                                                                                      |
| ballcontrol      | `Number`                       | The player's ball control rating.                                                                                 |
| crossing         | `Number`                       | The player's crossing rating.                                                                                     |
| curve            | `Number`                       | The player's curve rating.                                                                                        |
| dribbling        | `Number`                       | The player's dribbling rating.                                                                                    |
| finishing        | `Number`                       | The player's finishing rating.                                                                                    |
| freekickaccuracy | `Number`                       | The player's free kick accuracy.                                                                                  |
| goalkeeping      | `Number`                       | The player's goalkeeping rating.                                                                                  |
| gkdiving         | `Number`                       | The player's goalkeeper diving rating.                                                                            |
| gkhandling       | `Number`                       | The player's goalkeeper handling rating.                                                                          |
| gkkicking        | `Number`                       | The player's goalkeeper kicking rating.                                                                           |
| gkpositioning    | `Number`                       | The player's goalkeeper positioning rating.                                                                       |
| gkreflexes       | `Number`                       | The player's goalkeeper reflexes rating.                                                                          |
| headingaccuracy  | `Number`                       | The player's heading accuracy rating.                                                                             |
| interceptions    | `Number`                       | The player's interceptions rating.                                                                                |
| jumping          | `Number`                       | The player's jumping rating.                                                                                      |
| longpassing      | `Number`                       | The player's long passing rating.                                                                                 |
| longshots        | `Number`                       | The player's long shots rating.                                                                                   |
| marking          | `Number`                       | The player's marking rating.                                                                                      |
| penalties        | `Number`                       | The player's penalty rating.                                                                                      |
| positioning      | `Number`                       | The player's positioning rating.                                                                                  |
| reactions        | `Number`                       | The player's reactions rating.                                                                                    |
| shortpassing     | `Number`                       | The player's shortpassing rating.                                                                                 |
| shotpower        | `Number`                       | The player's shot power rating.                                                                                   |
| slidingtackle    | `Number`                       | The player's slide tackling rating.                                                                               |
| sprintspeed      | `Number`                       | The player's sprint speed rating.                                                                                 |
| standingtackle   | `Number`                       | The player's standing tackling rating.                                                                            |
| stamina          | `Number`                       | The player's stamina rating.                                                                                      |
| strength         | `Number`                       | The player's strength rating.                                                                                     |
| vision           | `Number`                       | The player's vision rating.                                                                                       |
| volleys          | `Number`                       | The player's volleys rating.                                                                                      |
