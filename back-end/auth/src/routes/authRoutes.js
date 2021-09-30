const router = require("express").Router();
const customers = require("../models/customers");

router.get("/", async (req, res) => {
  customers.find({}).exec((err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(result);
    }
  });
});

router.post("/", async (req, res) => {
  customers
    .create({
      id: 6,
      username: "username6",
      password: "password6",
      first_name: "John",
      last_name: "Doe",
      postal_code: "650382",
      gender: "Non-binary",
      created_at: "2021-09-10",
    })
    .then(() => res.sendStatus(201))
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
