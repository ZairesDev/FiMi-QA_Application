const router = require("express").Router();
const { EmployeeSuper } = require("../../models");

router.get("/", (req, res) => {
  EmployeeSuper.findAll({
    attributes: ["id", "first_name", "last_name", "site", "language", "group"],
  })
    .then((employeeData) => res.json(employeeData))

    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  EmployeeSuper.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "first_name", "last_name", "site", "language", "group"],
  })
    .then((employeeData) => res.json(employeeData))

    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  if (req.session) {
    EmployeeSuper.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      site: req.body.site,
      language: req.body.language,
      group: req.body.group,
    })
      .then((employeeData) => res.json(employeeData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
});

router.put("/:id", (req, res) => {
  EmployeeSuper.update(
    {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      site: req.body.site,
      language: req.body.language,
      group: req.body.group,
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
  EmployeeSuper.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((employeeData) => {
      if (!employeeData) {
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
