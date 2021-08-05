const Sequelize = require("sequelize");
//link
let sequelize;
if (process.env.CLEARDB_DATABASE_URL) {
  // for Heroku
  sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL, {});
} else {
  require("dotenv").config();
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );
}