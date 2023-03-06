const router = require("express").Router();
const projectRoutes = require("./projectRoutes");
const contactMe = require("./contactMe.js");

router.use("/projects", projectRoutes);
router.use("/contactMe", contactMe);

module.exports = router;
