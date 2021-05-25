const path = require("path");
const router = require("express").Router();
const routeController = require("../../controllers/routeController");

router.route("/")
    .get(routeController.findAll)
    .post(routeController.createRoute)
    
module.exports = router; 