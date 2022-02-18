const withAuth = (req, res, next) => {
  if (!req.session.qaSupid) {
    res.redirect("/");
  } else {
    next();
  }
};

module.exports = withAuth;
