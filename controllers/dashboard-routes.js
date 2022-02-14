const router = require("express").Router();
const { response } = require("express");
const sequelize = require("../config/connection");
const { Employee } = require("../models");

router.get("/", (req, res) => {
  Employee.findAll({
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

router.get("/:id", (req, res) => {
  Employee.findOne({
    where: {
      id: req.params.id,
    },
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

    //need to remove lines 57-59 when handlebars is ready and uncomment line 54
    .then((rep) => {
      res.status(200).json(rep);
    })

    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
