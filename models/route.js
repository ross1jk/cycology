const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const routeSchema = new Schema({
  start_location: { type: String, required: true },
  end_location: { type: String, required: true},
  start_coordinates:{ type: String, required: true}, 
  end_coordinates:{ type: String, required: true}, 
  review: { type: String, default: "" },
  rating: { type: Number, default: 0 }
});

const Route = mongoose.model("Route", routeSchema);

module.exports = Route; 
