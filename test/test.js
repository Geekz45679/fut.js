const assert = require('assert');
const getPlayer = require('../src/getPlayer.js');
const getPrice = require('../src/getPrice.js');

describe('getPlayer(\'Messi\', true)', () => {
  it('Should return a map with multiple keys of data for Messi, in an organised format', async () => {
    const messi = await getPlayer('Messi', true);
    if (!messi) return assert.fail('No data was returned.');
    if (!messi.length > 1) return assert.fail('There was less than one set of data, expected more than one.');
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
    if (player) return assert.fail(`The test returned ${player.length} results(s), zero were expected.`);
  });
});

describe('getPrice(\'Messi\')', () => {
	it('Should return a price above 150 for Xbox.', async () => {
		const price = await getPrice('158023');
		if (!price || !price > 150) return assert.fail(`The test returned ${price.xbox} and was meant to return a value above 150.`);
	});

	it('Should return a price above 150 for PS4.', async () => {
		const price = await getPrice('158023');
		if (!price || !price > 150) return assert.fail(`The test returned ${price.ps} and was meant to return a value above 150.`);
	});

	it('Should return a price above 150 for PC.', async () => {
		const price = await getPrice('158023');
		if (!price || !price > 150) return assert.fail(`The test returned ${price.pc} and was meant to return a value above 150.`);
	});
});