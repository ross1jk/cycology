const router = require("express").Router();
const  userRoutes = require("./route");

// Book Routes
router.use("/routes", userRoutes);

module.exports = router;