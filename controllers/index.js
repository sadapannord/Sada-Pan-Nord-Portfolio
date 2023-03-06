const router = require("express").Router();
const projectRoutes = require("./projectRoutes");
const contactMe = require("./contactMe.js");
const homeRoutes = require("./homeRoutes");

router.use("/projects", projectRoutes);
router.use("/contactMe", contactMe);
router.use("/", homeRoutes);

module.exports = router;
