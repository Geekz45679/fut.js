const fetch = require('node-fetch');
const endpoint = 'https://www.easports.com/fifa/ultimate-team/api/fut/item?jsonParamObject={"name":"{}"}';

const cleanData = require('./cleanData.js');

/**
 * @param {string} name
 * @param {boolean} clean - Optional, chooses whether to clean the data into a more organized format, or to get the raw JSON data.
 * @returns {Array}
 * @async
 */
module.exports = async (name, clean = true) => {
  try {
    if (!name) return console.error(new Error(error));
    const request = await fetch(endpoint.replace('{}', name));
    const data = await request.json();
    if (clean) {
      return cleanData(data);
    } else if (!clean) {
      return (data.count === 0) ? null : data;
    }
  } catch (error) {
    return console.error(new Error(error));
  }
};