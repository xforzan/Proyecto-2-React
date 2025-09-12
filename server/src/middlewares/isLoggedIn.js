const jwt = require("jsonwebtoken");

const isLoggedIn = (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      req.isLoggedIn = false;
      return next();
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.isLoggedIn = true;
      req.userId = decoded.userId;
    } catch (err) {
      req.isLoggedIn = false;
    }

    next();
  } catch (error) {
    res.status(500).json({message:"Ha habido un error al verificar la autenticación", error});
  }
};

module.exports = { isLoggedIn };
