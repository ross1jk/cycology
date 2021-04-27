const db = require("../models");

module.exports = (app) => {
    app.get("/api/routes", (req, res) => {
        db.Route.findAll({})
        .then((dbRoute) => {
            res.json(dbRoute); 
        })
    });

    app.post("/api/routes", (req, res) => {
        console.log(req.body); 
        db.Route.create({
            start_location: req.body.start_location,
            end_location: req.body.end_location,
            route_rating: "",
            comments: "",
        }).then((dbRoute) => {
            console.log(dbRoute); 
        }); 
    })
}