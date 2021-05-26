import axios from "axios"; 

export default {
  // find all routes
  findRoutes: function () {
    return axios.get("/api/routes/");
  },
  // create new routes
  createRoutes: function(userData) {
    return axios.post("/api/routes/", userData)
  }
}