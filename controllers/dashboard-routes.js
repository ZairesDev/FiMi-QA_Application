const router = require('express').Router();

const { Employee } = require('../models');

router.get('/', (req, res) => {
  Employee.findAll({
    attributes: [
      'id',
      'first_name',
      'last_name',
      'employee_number',
      'site',
      'role',
      'language',
      'group',
      'employeesuper_id',
      'qaAgent_id',
    ],
  })
    // .then(res.render('spreadsheet', { loggedIn: req.session.loggedIn }))
    .then((response) => {
      const employees = response.map((employee) => {
        return {
          id: employee.id,
          first_name: employee.first_name,
          last_name: employee.last_name,
          employee_number: employee.employee_number,
          site: employee.site,
          role: employee.role,
          language: employee.language,
          group: employee.group,
          employeesuper_id: employee.employeesuper_id,
          qaAgent_id: employee.qaAgent_id,
        };
      });
      res.render(`spreadsheet`, {
        employees,
        loggedIn: req.session.loggedIn,
      });
    })

    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Employee.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      'id',
      'first_name',
      'last_name',
      'employee_number',
      'site',
      'role',
      'language',
      'group',
      'employeesuper_id',
      'qaAgent_id',
    ],
  })

    .then(res.render('spreadsheet', { loggedIn: req.session.loggedIn }))

    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
