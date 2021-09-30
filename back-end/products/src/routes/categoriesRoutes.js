const router = require("express").Router();
const categoriesModel = require("../models/categoriesModel");

router.get("/", async (req, res) => {
  try {
    const categories = await categoriesModel.find({});
    return res.send(categories);
  } catch (e) {
    return res.status(500).send(e);
  }
});

module.exports = router;
