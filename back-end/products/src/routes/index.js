module.exports = (app) => {
  app.use("/categories", require("./categoriesRoutes"));
  app.use("/products", require("./productsRoutes"));
};
