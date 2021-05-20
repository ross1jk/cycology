const router = require("express").Router();
const  userRoutes = require("./route");
const user = require("./user");

// Book Routes
router.use("/routes", userRoutes);

// User Routes
router.use("/user", user); 

module.exports = router;