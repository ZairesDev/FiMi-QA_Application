const router = require('express').Router();

const { Employee } = require('../../models');
const withAuth = require('../../utils/auth');

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

    .then((employeeData) => res.json(employeeData))

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

    .then((employeeData) => res.json(employeeData))

    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
  if (req.session) {
    Employee.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      employee_number: req.body.employee_number,
      site: req.body.site,
      role: req.body.role,
      language: req.body.language,
      group: req.body.group,
      employeesuper_id: req.body.employeesuper_id,
      qaAgent_id: req.body.qaAgent_id,
      qasup: req.body.qasup,
    })
      .then((employeeData) => res.json(employeeData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
});

router.put('/:id', withAuth, (req, res) => {
  Employee.update(req.body, {
    where: {
      id: req.params.id,
    },
  })

    .then((employeeData) => {
      if (!employeeData) {
        res.status(404).json({ message: 'No call rep found' });
        return;
      }
      res.json(employeeData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  console.log('id', req.params.id);
  Employee.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((employeeData) => {
      if (!employeeData) {
        res.status(404).json({ message: 'No call rep found with this id' });
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
