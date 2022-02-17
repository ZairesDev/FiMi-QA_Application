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
      "role",
      "language",
      "group",
      "employee_supervisor_id",
      "qa_agent",
    ],
  })
    .then(res.render("dashboard", { loggedIn: req.session.loggedIn }))

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
      "role",
      "language",
      "group",
      "employee_supervisor_id",
      "qaAgent_id",
    ],
  })

    .then(res.render("dashboard", { loggedIn: req.session.loggedIn }))

    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
