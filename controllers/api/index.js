const router = require("express").Router();

const csrRoutes = require("./callspecialist-routes");
const euRoutes = require("./escalationUnit-routes");

router.use("/csr", csrRoutes);
router.use("/eu", euRoutes);

module.exports = router;
