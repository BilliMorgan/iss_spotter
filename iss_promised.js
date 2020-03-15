const request = require('request-promise-native');
const { printPassTimes } = require('./index.js')

const fetchMyIP = function () {
  return request('https://api.ipify.org?format=json');
};
const fetchCoordsByIP = function (body) {
  const ip = JSON.parse(body).ip;
  return request(`https://ipvigilante.com/json/${ip}`) //need to add ${ip} instead of 8.8.8.8

};
const fetchISSFlyOverTimes = function (body) {
  const geo = JSON.parse(body).data
  //console.log(geo.latitude);

  return request(`http://api.open-notify.org/iss-pass.json?lat=${geo.latitude}&lon=${geo.longitude}`)
}
const nextISSTimesForMyLocation = function () {
  fetchMyIP()
    .then((body) => {
      return fetchCoordsByIP(body)
    })
    .then((body) => {
      return fetchISSFlyOverTimes(body)
    })
    .then((body) => {
      return JSON.parse(body).response

    })
    .then((response) => {
      return response
    })
};


module.exports = { nextISSTimesForMyLocation };