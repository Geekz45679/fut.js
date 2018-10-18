const fetch = require('node-fetch');
const endpoint = 'https://www.easports.com/au/fifa/ultimate-team/api/fut/price-band/{}';

const cleanData = require('./cleanData.js');

/**
 * @param {string} id
 * @returns {Object}
 * @async
 */
module.exports = async (id) => {
  try {
    if (!id) return console.error(new Error('The id parameter is not valid!'));
    if (isNaN(parseInt(id))) return console.error(new Error('The id parameter is not valid!'));
    const request = await fetch(endpoint.replace('{}', id));
    const data = await request.json();
    if (!data) return null;
    const coins = (!Object.entries(data)[0][1].priceLimits) ? null : Object.entries(data)[0][1].priceLimits;

    return {
      pc: coins.pc,
      ps: coins.ps4,
      xbox: coins.xboxone
    };
  } catch (error) {
    return console.error(new Error(error));
  }
};