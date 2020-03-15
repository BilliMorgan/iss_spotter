//const {fetchMyIP} = require('./iss.js')
//const { fetchMyIP/*, fetchCoordsByIP, fetchISSFlyOverTimes */} = require('./iss');

const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = function (passTimes) {
  
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};
nextISSTimesForMyLocation((error, passTimes) => {
if(error) {
  return console.log("It didn't work!", error);
}
  printPassTimes(passTimes)
  //console.log(Array.isArray(passTimes))
});

module.exports = { printPassTimes}

// const testIp = fetchMyIP((error, ip) => {
//   // if (error) {
//   //   console.log("It didn't work!", error);
//   //   return;
//   // }
//   return ip;
// });
// console.log(testIp)
// fetchCoordsByIP(ip, (error, data) => {
//     if (error) {
//       console.log("It didn't work!", error);
//       return;
//     }
//     console.log('It worked! Returned GRO:', data);


//   });
// fetchISSFlyOverTimes(data, (error, passTimes) => {
//       if (error) {
//         console.log("It didn't work!", error);
//         return;
//       }
//       console.log('It worked! Returned flyover times:', passTimes);


//     });

// nextISSTimesForMyLocation((error, passTimes) => {
//         if (error) {
//           return console.log("It didn't work!", error);
//         }
//         console.log(passTimes)
//         //success
//         console.log(`Next pass at Fri Jun 01 2021 13:01:35 GMT-0700 (Pacific Daylight Time) for 465 seconds!passTimes`)
//       });