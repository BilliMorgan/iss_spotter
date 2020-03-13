
const request = require('request');

const fetchMyIP = function (callback) {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    } else {
      const ip = JSON.parse(body);
      return callback(null, ip.ip);
    }
  });
};
const fetchCoordsByIP = function (ip, callback) {

  request(`https://ipvigilante.com/${ip}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching GEO. Response: ${body}`;
      callback(Error(msg), null);
      return;
    } else {

      const data = JSON.parse(body);
      
      const coords = { latitude: data.data.latitude, longitude: data.data.longitude };

      return callback(null, coords);
    }
  })
};
const fetchISSFlyOverTimes = function (coords, callback) {
console.log("cords " + coords)

  request(`http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching ISS request. Response: ${body}`;
      callback(Error(msg), null);
      return;
    } else {

      const  issObj= JSON.parse(body);
      return callback(null, issObj);
      
    }
  })
};




module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes};