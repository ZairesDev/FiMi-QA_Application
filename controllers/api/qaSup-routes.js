const router = require("express").Router();
const { QaSuper } = require("../../models");

router.get("/", (req, res) => {
  QaSuper.findAll({
    attributes: { exclude: ["password"] },

    attributes: [
      "id",
      "first_name",
      "last_name",
      "language",
      "site",
      "username",
      "email",
      "password",
    ],
  })

    .then((qaData) => res.json(qaData))

    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  QaSuper.findOne({
    where: {
      id: req.params.id,
    },
    attributes: { exclude: ["password"] },
    attributes: [
      "id",
      "first_name",
      "last_name",
      "language",
      "site",
      "username",
      "email",
      "password",
    ],
  })

    .then((qaData) => res.json(qaData))

    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  QaSuper.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    language: req.body.language,
    site: req.body.site,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
    .then((qaData) => res.json(qaData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  QaSuper.update(
    req.body,

    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((qaData) => {
      if (!qaData) {
        res.status(404).json({ message: "No QA agent found" });
        return;
      }
      res.json(qaData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/login", (req, res) => {
  QaSuper.findOne({
    where: {
      username: req.body.username,
    },
  }).then((qaData) => {
    if (!qaData) {
      res.status(400).json({ message: "No user with that username!" });
      return;
    }

    const validPassword = qaData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password!" });
      return;
    }

    req.session.save(() => {
      req.session.id = qaData.id;
      req.session.username = qaData.username;
      req.session.loggedIn = true;

      res.json({ QaSuper: qaData, message: "You are now logged in!" });
    });
  });
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.delete("/:id", (req, res) => {
  QaSuper.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((qaData) => {
      if (!qaData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(qaData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
