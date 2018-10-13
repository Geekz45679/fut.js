const fetch = require('node-fetch');
const endpoint = 'https://www.easports.com/fifa/ultimate-team/api/fut/item?jsonParamObject={"name":"{}"}';

const cleanData = require('./cleanData.js');

/**
 * @param {string} name
 * @param {boolean} clean - Optional, chooses whether to clean the data into a more organized format, or to get the raw JSON data.
 * @returns {Promise<Map<'Player', 'Data'>>}
 * @async
 */
module.exports = async (name, clean = true) => {
  try {
    if (!name) throw new Error('Error: Name parameter is invalid.');
    const request = await fetch(endpoint.replace('{}', name));
    const data = await request.json();
    if (clean) {
      return cleanData(data);
    } else if (!clean) {
      return (data.count === 0) ? null : data;
    }
  } catch (error) {
    throw new Error(error);
  }
};