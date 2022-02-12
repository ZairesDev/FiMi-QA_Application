const router = require("express").Router();
const { status } = require("express/lib/response");
const res = require("express/lib/response");
const sequelize = require("../config/connection");
const {} = require("../models");
const withAuth = require("../utils/auth");

router.get("/", (req, res) => {
  res.status(200);
});

module.exports = router;
