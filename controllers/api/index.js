const router = require("express").Router();

const csrRoutes = require("./callspecialist-routes");
const euRoutes = require("./escalationUnit-routes");
const qaRoutes = require("./qaAgent-routes");

router.use("/csr", csrRoutes);
router.use("/eu", euRoutes);
router.use("/qa", qaRoutes);

module.exports = router;
