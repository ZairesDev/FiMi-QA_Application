const router = require("express").Router();
const { response } = require("express");
// const { response } = require("express");
const sequelize = require("../config/connection");
const { CallRep } = require("../models");

router.get("/", (req, res) => {
  CallRep.findAll({
    attributes: [
      "id",
      "first_name",
      "last_name",
      "employee_number",
      "site",
      "start_date",
      "role",
      "language",
      "group",
      "supervisor_id",
      "qa_agent",
    ],
  })
    // .then(res.render("dashboard", { loggedIn: req.session.loggedIn }))

    //need to remove lines 26-28 when handlebars is ready and uncomment line 23
    .then((rep) => {
      res.status(200).json(rep);
    })

    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/", (req, res) => {
  Escalation_Unit.findAll({
    attributes: [
      "id",
      "first_name",
      "last_name",
      "employee_number",
      "site",
      "start_date",
      "role",
      "language",
      "group",
      "supervisor_id",
      "qa_agent",
      "qa_supervisor",
    ],
  })
    // .then(res.render("dashboard", { loggedIn: req.session.loggedIn }))

    //need to remove lines 55-60 when handlebars is ready and uncomment line 52
    .then((rep) => {
      res.status(200).json(rep);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
