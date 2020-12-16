require("dotenv").config();
const { GOOG } = process.env;
const moment = require("moment");
const axios = require("axios");
//routes or distance matrix api?

//make iterable- can take in multiple days' worth of data and run

//it'll probably be the directions api since that allows for sequential waypoints

const talladega = async ({ origin, destination, waypoints, forDate }) => {
  //waypoints should be an array of long/lat combinations
  let requestUrl = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&waypoints=${waypoints}&key=${GOOG}`;

  let totalDist = 0;
  let totalTime = 0;
  axios
    .get(requestUrl)
    .then(res => {
      let base = res.data.routes[0].legs;
      for (let i = 0; i < base.length; i++) {
        totalDist += base[i].distance.value;
        //value in seconds
        totalTime += base[i].duration.value;
      }
      return {
        totalDist,
        totalTime
      };
    })
    .catch();
};

talladega({
  origin: "512 N claypool ct virginia beach va",
  destination: "609 ben bow dr virginia beach va",
  waypoints: [
    "104 Constitution Dr, Virginia Beach, VA 23462| 3234 Virginia Beach Blvd, Virginia Beach, VA 23452"
  ]
});
