const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const routeSchema = new Schema({
  start_location: { type: String, required: true },
  end_location: { type: String, required: true},
  review: { type: String },
  rating: { type: Number, default: 0 }
});

const Route = mongoose.model("Route", routeSchema);

module.exports = Route; 
