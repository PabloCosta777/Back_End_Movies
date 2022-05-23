const { DataTypes } = require("sequelize");
const conn = require('../db')

const movies = conn.define("movie", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title:{
        type:DataTypes.STRING
    },
    departure_day:{
        type: DataTypes.DATE,
        allowNull:false
    },
    rating:{
        type: DataTypes.INTEGER
    }
});
module.exports = movies