import axios from "axios"; 
const geoUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
const geoEnd = ".json?access_token=pk.eyJ1Ijoicm9zczFqayIsImEiOiJja2p0YzJ0bmowOTd3MnFxc2c0Z2NiMWw0In0.3mcyR7CpPBKi_sGyVdA26A";

export default {
  // find all routes
  findRoutes: function () {
    return axios.get("/api/routes/");
  },
  // find one route
  findOne: function (id) {
    return axios.get("/api/routes/" + id)
  },
  // create new routes
  createRoutes: function(userRoute) {
    return axios.post("/api/routes", userRoute)
  },
  // Update 
  updateRating: function(rating){
    return axios.post("/api/routes/rating/", rating)
  },
  updateReview: function(review){
    return axios.post("/api/routes/review/",  review)
  },
  //Delete
  deleteRoute: function(id){
    return axios.delete("/api/routes/" + id)
  },
  //Geolocation
  findCoords: function(location){
    return axios.get(geoUrl + location + geoEnd)
  }
}