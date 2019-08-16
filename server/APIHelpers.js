const axios = require("axios");
const { API_KEY } = require("../config/config.js");

let getYoutuberData = username => {
  let options = `https://www.googleapis.com/youtube/v3/channels?part=id%2Csnippet%2Cstatistics%2CcontentDetails%2CtopicDetails&forUsername=${username}&key=${API_KEY}`;

  return axios
    .get(options)
    .then(data => {
      return data.data.items;
    })
    .catch(err => {
      return err;
    });
};

module.exports = {
  getYoutuberData: getYoutuberData
};
