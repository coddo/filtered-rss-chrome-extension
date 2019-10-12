const axios = require("axios");

module.exports.proxyRequest = async (event) => {
  const url = decodeURIComponent(event.queryStringParameters.feed);
  const response = await axios.get(url);
  const agwResponse = {
    statusCode: response.status,
    headers: {
      "Access-Control-Allow-Origin": "chrome-extension://iebjlmlcnpdkeladjfjjokagningffec"
      //"Access-Control-Allow-Origin": "*"
    },
  };

  if (response.status !== 200) {
    agwResponse.body = `Error invoking feed: status ${response.status}, message ${response.data}`;
    return Promise.reject(agwResponse);
  }

  agwResponse.body = response.data;
  return Promise.resolve(agwResponse);
}