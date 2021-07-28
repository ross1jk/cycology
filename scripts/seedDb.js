const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/cycology"
);

const routeSeed = [
    {
        start_location: "Main St Royal Oak Michigan",
        end_location: "Gardenia Ave Royal Oak Michigan",
        startCord: "83.1446,42.4895", 
        endCord: "83.0458,42.3314", 
        review: "This route was way too short for me",
        rating: 2
        }
];

db.Route
  .remove({})
  .then(() => db.Route.collection.insertMany(routeSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
