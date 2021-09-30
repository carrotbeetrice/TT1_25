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
  /**
   * JWT Secrets
   */
  jwt: {
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
    refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
    maxAccessTokenAge: "12h",
    maxRefreshTokenAge: "168h",
  },
};
