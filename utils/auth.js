const withAuth = (req, res, next) => {
  if (!req.session.qasup) {
    res.redirect("/");
  } else {
    next();
  }
};

module.exports = withAuth;
