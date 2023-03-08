const withAuth = (req, res, next) => {
    if (!req.session.userId) {
      res.redirect("/login");
    } else {
      next();
    }
  };
  
  module.exports = withAuth;

// verifies if the user is logged in before access to posts is given.
// will redirect the user to the login page if not already logged in. 