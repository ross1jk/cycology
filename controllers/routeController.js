const db = require("../models");

module.exports = {
    findAll: function(req, res){
        db.Route
        .findAll(req.query)
        .then(dbRoute => res.json(dbRoute))
        .catch(err => res.status(422).json(err)); 
    }
}