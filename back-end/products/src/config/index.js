require("dotenv").config();

module.exports = {
  /**
   * API Port
   */
  port: process.env.PORT,
  /**
   * MongoDB configs
   */
  db: {
    conString: process.env.CON_STRING,
    dbName: process.env.DB_NAME,
  },
  /**
   * JWT Secrets
   */
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
};
