const db = require("../models");

module.exports = {
    findAll: function(req, res){
        db.Route
        .find(req.query)
        .then(dbRoute => res.json(dbRoute))
        .catch(err => res.status(422).json(err)); 
    },
    createRoute: function (req, res){
        db.Route
        .create(req.body)
        .then(dbRoute => res.json(dbRoute))
        .catch(err => res.status(422).json(err)); 
    }
}