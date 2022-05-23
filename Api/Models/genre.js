const { DataTypes } = require("sequelize");
const conn = require("../db");

const genres = conn.define("genre", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name:{
        type:DataTypes.STRING
  },
  image: {
    type: DataTypes.STRING
  },
  
});
module.exports = genres;
