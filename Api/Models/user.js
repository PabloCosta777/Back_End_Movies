const { DataTypes } = require("sequelize");
const conn = require("../db");

const user = conn.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  }
});
module.exports = user;
