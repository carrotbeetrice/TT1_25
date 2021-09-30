const router = require("express").Router();
const productsModel = require("../models/productsModel");

router.get("/", async (req, res) => {
  try {
    const products = await productsModel.find({});
    return res.send(products);
  } catch (e) {
    return res.status(500).send(e);
  }
});

router.get("/byCategory/:category_id", async (req, res) => {
  try {
    const { category_id } = req.params;
    const products = await productsModel.find({ category_id });
    return res.send(products);
  } catch (e) {
    return res.status(500).send(e);
  }
});

router.get("/:product_id", async (req, res) => {
  try {
    const { product_id } = req.params;
    const product = await productsModel.findOne({
      id: parseInt(product_id),
    });
    return res.send(product);
  } catch (e) {
    return res.status(500).send(e);
  }
});

module.exports = router;
