require("dotenv").config();

module.exports = {
  /**
   * API Port
   */
  port: process.env.PORT,
  /**
   * MongoDB configs
   */
  db_string: process.env.CON_STRING,
};
