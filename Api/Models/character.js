const { DataTypes } = require("sequelize");
const conn =require('../db')

const character = conn.define("character", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  img:{
    type:DataTypes.STRING,
    allowNull:false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  weight: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  history: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});
module.exports = character 