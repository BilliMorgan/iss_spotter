// const { fetchMyIP } = require('./iss_promised');
// const { fetchCoordsByIP } = require('./iss_promised')
// const { fetchISSFlyOverTimes } = require('./iss_promised')
const { nextISSTimesForMyLocation } = require('./iss_promised')

const printPassTimes = function (passTimes) {
  
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation()
.then((passTimes) => {
printPassTimes(passTimes)
})



// fetchMyIP()
// .then((body) => {
//   return fetchCoordsByIP(body)
// })
// .then((body) => {
//   return fetchISSFlyOverTimes(body)
// })
// .then((body) => {
//   return JSON.parse(body).response
// })