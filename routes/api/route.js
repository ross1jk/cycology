const router = require("express").Router();
const routeController = require("../../controllers/routeController");

router.route("/")
    .get(routeController.findAll)
    .post(routeController.createRoute)

router.route("/rating")
    .post(routeController.updateRating)

router.route("/review")
    .post(routeController.updateReview)
    
router.route("/:id")
    .get(routeController.findOne)
    .delete(routeController.deleteRoute)
    
module.exports = router; 