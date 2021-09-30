const express = require("express");
const cors = require("cors");
const { port } = require("./config");
const { authJWT } = require("./utils");
const connectToDb = require("./db");

const startServer = () => {
  const app = express();

  /**
   * Middlewares
   */
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cors());
  app.use(authJWT);

  // Use routes
  require("./routes")(app);

  connectToDb();

  app.listen(port, () => {
    console.log("Running Products API at port", port);
  });
};

startServer();
