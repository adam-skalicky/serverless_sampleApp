const packageJSON = require('../package.json');
const uuidv4 = require("uuid/v4");

module.exports.version = async (event) => {
  var guid = uuidv4();
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({
      name: packageJSON.name,
      version: packageJSON.version,
      guid,
      region: `${process.env.region}`
    })
  };
};