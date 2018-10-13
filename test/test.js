const assert = require('assert');
const getPlayer = require('../src/getPlayer.js');

describe('getPlayer(\'Messi\', true)', () => {
  it('Should return a map with multiple keys of data for Messi, in an organised format', async () => {
    const messi = await getPlayer('Messi', true);
    if (!messi) return assert.fail('No data was returned.');
    if (!messi.size > 1) return assert.fail('There was less than one set of data, expected more than one.');
  });
});

describe('getPlayer(\'Messi\', false)', () => {
  it('Should return the raw JSON data for Messi.', async () => {
    const messi = await getPlayer('Messi', false);
    if (!messi) return assert.fail('No data was returned.');
  });
})

describe('getPlayer(\'thisisnotaplayer\', true)', () => {
  it('Shouldn\'t return any data.', async () => {
    const player = await getPlayer('thisisnotaplayer', true);
    if (player) return assert.fail(`The test returned ${player.size} results(s), zero were expected.`);
  });
});