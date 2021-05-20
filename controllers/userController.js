const db = require("../models");

module.exports = {
    create: function(req, res){
        db.User
        .findAll(req.body)
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(401).json(err)); 
    }
}