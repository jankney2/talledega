require("dotenv").config();
const { GOOG } = process.env;
const moment = require("moment");
//routes or distance matrix api?

//make iterable- can take in multiple days' worth of data and run

//it'll probably be the directions api since that allows for sequential waypoints

const matrix = ({ origin, destinations, forDate }) => {
  //request to api
  //save drive time for the day
};

const routes = ({ origin, destination, waypoints, forDate }) => {

    //waypoints should be an array of long/lat combinations 
  let requestUrl=  `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&waypoints=${waypoints}&key=${GOOG}`;
};
