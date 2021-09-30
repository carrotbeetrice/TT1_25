const router = require("express").Router();
const customers = require("../models/customers");
const { generateTokens, newAccessToken } = require("../utils/jwt");

// User login
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const result = await customers.findOne({ username }).exec();

    if (!result) {
      return res.status(400).send("Invalid username");
    }

    if (password !== result.password) {
      return res.status(400).send("Incorrect password");
    }

    const { accessToken, refreshToken } = generateTokens({
      id: result.id,
      username: result.username,
    });

    return res.send({ accessToken, refreshToken });
  } catch (e) {
    return res.status(500).send(e);
  }
});

// Generate new access token for user
router.get("/refresh", (req, res) => {
  const authHeader = req.headers.authorization;

  if (authHeader.startsWith("Bearer ")) {
    const refreshToken = authHeader.split(" ")[1];
    const accessToken = newAccessToken(refreshToken);

    res.send(accessToken);
  } else {
    res.sendStatus(401);
  }
});

// router.get("/", async (req, res) => {
//   customers.find({}).exec((err, result) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.send(result);
//     }
//   });
// });

// router.post("/", async (req, res) => {
//   customers
//     .create({
//       id: 6,
//       username: "username6",
//       password: "password6",
//       first_name: "John",
//       last_name: "Doe",
//       postal_code: "650382",
//       gender: "Non-binary",
//       created_at: "2021-09-10",
//     })
//     .then(() => res.sendStatus(201))
//     .catch((err) => res.status(500).send(err));
// });

module.exports = router;
