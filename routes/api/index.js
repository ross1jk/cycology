const router = require("express").Router();
const  userRoutes = require("./route");

router.use("/routes", userRoutes);

module.exports = router;