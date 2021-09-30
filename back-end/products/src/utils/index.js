const jwt = require("jsonwebtoken");
const { accessTokenSecret } = require("../config");

const authJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, accessTokenSecret, (err, decoded) => {
      if (err) return res.status(401).send(err);
      else {
        req.user = parseInt(decoded.id);
        next();
      }
    });
  } else {
    res.sendStatus(401);
  }
};

module.exports = { authJWT };
