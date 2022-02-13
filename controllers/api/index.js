const router = require("express").Router();

const csrRoutes = require("./callspecialist-routes.js");

router.use("/csr", csrRoutes);

module.exports = router;
