import axios from "axios"; 

export default {
  // find all routes
  findRoutes: function () {
    return axios.get("/api/routes/");
  },
  // create new routes
  createRoutes: function(userRoute) {
    return axios.post("/api/routes", userRoute)
  }
}