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
      "start_date",
      "role",
      "language",
      "group",
      "supervisor_id",
      "qa_agent",
    ],
  })
    .then(res.render("empform", { loggedIn: req.session.loggedIn }))

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

    .then(res.render("empform", { loggedIn: req.session.loggedIn }))

    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  if (req.session) {
    Employee.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      employee_number: req.body.employee_number,
      site: req.body.site,
      start_date: req.body.start_date,
      role: req.body.role,
      language: req.language,
      group: req.group,
      supervisor_id: req.supervisor_id,
      qa_agent: req.body.qa_agent,
    })
      .then((employeeData) => res.json(employeeData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
});

router.put("/:id", (req, res) => {
  Employee.update(
    {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      employee_number: req.body.employee_number,
      site: req.body.site,
      start_date: req.body.start_date,
      role: req.body.role,
      language: req.language,
      group: req.group,
      supervisor_id: req.supervisor_id,
      qa_agent: req.body.qa_agent,
    },

    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((employeeData) => {
      if (employeeData) {
        res.status(404).json({ message: "No employee found" });
        return;
      }
      res.json(employeeData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  console.log("id", req.params.id);
  Employee.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((employeeData) => {
      if (!callRepData) {
        res.status(404).json({ message: "No employee found" });
        return;
      }
      res.json(employeeData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
