const router = require("express").Router();

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
      "employeesuper_id",
      "qaAgent_id",
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
      "employeesuper_id",
      "qaAgent_id",
    ],
  })

    .then(res.render("dashboard", { loggedIn: req.session.loggedIn }))

    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
