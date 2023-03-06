const router = require("express").Router();
const projectRoutes = require("./projectRoutes");
const contactMe = require("./contactMe");

router.use("/projects", projectRoutes);
router.use("/contactMe", contactMe);

module.exports = router;
