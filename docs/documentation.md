![Build](https://travis-ci.org/Geekz45679/fut.js.svg?branch=master) ![Dependencies](https://david-dm.org/Geekz45679/fut.js.svg)
# Fut.js
### **getPlayer(name: string, clean: boolean)**:
- **Name**: `String`, the name of the player you would like to search for.
- **Clean**: `Boolean` (optional, defaults to `true`), if `true` the function returns an array with some of the useless stuff striped away into a neater format, if `false` the function just returns the raw JSON data.

### Contents of clean data:

#### Info, the information of the player, **(Reference an item using: `<player>.info.<itemname>`)**:

| Item:        | Type:  | Description:                                           |
|--------------|--------|--------------------------------------------------------|
| name         | String | The name of the player.                                |
| birthdate    | String | The birthdate of the player, in MM/DD/YYYY format.     |
| position     | String | The abbreviation of the player's position. (e.g. ST)   |
| positionName | String | The full name of the player's position. (e.g. Striker) |
| age          | Number | The age of the player.                                 |
| weight       | Number | The weight of the player, in metric KGs.               |
| height       | Number | The height of the player, measured in CM.              |
| foot         | String | The player's preferred foot.                           |
| club         | String | The name of the player's club.                         |
| nation       | String | The name of the player's national team.                |
| league       | String | The name of the player's league.                       |
| headshot     | URL    | The URL for the player's headshot image.               |
| id           | String | The ID of the card in the FUT database.                |
| baseId       | Number | The ID of the base card in the FUT database.           |

#### Stats, the skill statistics of the player, **(Reference an item using: `<player>.skills.<itemname>`)**:

| Item:            | Type:                        | Description:                                                                                                      |
|------------------|------------------------------|-------------------------------------------------------------------------------------------------------------------|
| overall          | Number                       | The player's overall rating.                                                                                      |
| workrates        | Object(Attacking, Defensive) | The player's work rates. Access using `workrates.attacking` or `workrates.defensive`.                             |
| weakfoot         | Number                       | The player's weak foot rating.                                                                                    |
| skillmoves       | Number                       | The player's skill move rating.                                                                                   |
| specialties      | Array(String)                | The specialties of the player in an array of strings.                                                             |
| traits           | Array(String)                | The traits of the player in an array of strings.                                                                  |
| attributes       | Array(Object(Name, Value))   | The player's attributes, for example PAC (Pace): 81. Access using `attributes[x].name` and `attributes[x].value`. |
| composure        | Number                       | The player's composure rating.                                                                                    |
| acceleration     | Number                       | The player's acceleration rating.                                                                                 |
| aggression       | Number                       | The player's aggression rating.                                                                                   |
| agility          | Number                       | The player's agility rating.                                                                                      |
| balance          | Number                       | The player's balance rating.                                                                                      |
| ballcontrol      | Number                       | The player's ball control rating.                                                                                 |
| crossing         | Number                       | The player's crossing rating.                                                                                     |
| curve            | Number                       | The player's curve rating.                                                                                        |
| dribbling        | Number                       | The player's dribbling rating.                                                                                    |
| finishing        | Number                       | The player's finishing rating.                                                                                    |
| freekickaccuracy | Number                       | The player's free kick accuracy.                                                                                  |
| goalkeeping      | Number                       | The player's goalkeeping rating.                                                                                  |
| gkdiving         | Number                       | The player's goalkeeper diving rating.                                                                            |
| gkhandling       | Number                       | The player's goalkeeper handling rating.                                                                          |
| gkkicking        | Number                       | The player's goalkeeper kicking rating.                                                                           |
| gkpositioning    | Number                       | The player's goalkeeper positioning rating.                                                                       |
| gkreflexes       | Number                       | The player's goalkeeper reflexes rating.                                                                          |
| headingaccuracy  | Number                       | The player's heading accuracy rating.                                                                             |
| interceptions    | Number                       | The player's interceptions rating.                                                                                |
| jumping          | Number                       | The player's jumping rating.                                                                                      |
| longpassing      | Number                       | The player's long passing rating.                                                                                 |
| longshots        | Number                       | The player's long shots rating.                                                                                   |
| marking          | Number                       | The player's marking rating.                                                                                      |
| penalties        | Number                       | The player's penalty rating.                                                                                      |
| positioning      | Number                       | The player's positioning rating.                                                                                  |
| reactions        | Number                       | The player's reactions rating.                                                                                    |
| shortpassing     | Number                       | The player's shortpassing rating.                                                                                 |
| shotpower        | Number                       | The player's shot power rating.                                                                                   |
| slidingtackle    | Number                       | The player's slide tackling rating.                                                                               |
| sprintspeed      | Number                       | The player's sprint speed rating.                                                                                 |
| standingtackle   | Number                       | The player's standing tackling rating.                                                                            |
| stamina          | Number                       | The player's stamina rating.                                                                                      |
| strength         | Number                       | The player's strength rating.                                                                                     |
| vision           | Number                       | The player's vision rating.                                                                                       |
| volleys          | Number                       | The player's volleys rating.                                                                                      |