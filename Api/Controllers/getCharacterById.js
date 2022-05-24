const character = require("../Models/character");
const movies = require("../Models/movie");

module.exports = async (req, res) => {
    let id =req.params.id
    let response = await character.findByPk(id,{include:{model:movies}})
    res.send(response)
};
