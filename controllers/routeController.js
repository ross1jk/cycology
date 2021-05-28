const db = require("../models");

module.exports = {
    findAll: function(req, res){
        db.Route
        .find(req.query)
        .then(dbRoute => res.json(dbRoute))
        .catch(err => res.status(422).json(err)); 
    },
    findOne: function(req, res){
        db.Route
        .findById({ _id: req.params.id })
        .then(dbRoute => res.json(dbRoute))
        .catch(err => res.stats(422).json(err)); 
    },
    createRoute: function (req, res){
        db.Route
        .create(req.body)
        .then(dbRoute => res.json(dbRoute))
        .catch(err => res.status(422).json(err)); 
    },
    updateRating: function (req, res){
        db.Route
        .findAndModify(
            {
                _id: req.body._id
            },
            {
                update: {
                    $set:{
                    rating: req.body.rating
                    }
                }
            })        
        .then(dbRoute => res.json(dbRoute))
        .catch(err => res.status(422).json(err)); 
    },
    updateReview: function (req, res){
        db.Route.updateOne(
            { _id: req.body._id} ,
            { $push: { review: req.body.review } }        
        )
        .then(dbRoute => res.json(dbRoute))
        .catch(err => res.status(422).json(err)); 
    },
}