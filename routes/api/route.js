const router = require("express").Router();
const routeController = require("../../controllers/routeController");

router.route("/")
    .get(routeController.findAll)
    
module.exports = router; 