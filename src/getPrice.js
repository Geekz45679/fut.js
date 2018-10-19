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
      pc: {
        min: coins.pc.minPrice,
        max: coins.pc.maxPrice
      },
      ps: {
        min: coins.ps4.minPrice,
        max: coins.ps4.maxPrice
      },
      xbox: {
        min: coins.ps4.minPrice,
        max: coins.ps4.maxPrice
      }
    };
  } catch (error) {
    return console.error(new Error(error));
  }
};