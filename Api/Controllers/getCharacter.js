const character =require('../Models/character')
const Sequelize = require("sequelize");
const movies = require('../Models/movie');
const Op = Sequelize.Op;
module.exports = async(req,res)=>{
    const {name,age,movieId} = req.query
    let response =null
    if(name){ 
        response = await character.findAll({
            attributes:['img','name'],
            where:{
                name:{[Op.like]:`{name}%`}
            }
        })
        res.send(response)
        
    }
    else if(age){
        response = await character.findAll({
          where: { age },
          attributes: ["img", "name"]
        });
        res.send(response)
    }
    else if(movieId){
        response = movies.findByPk(movieId, {
          attributes: ['title'],
          include: { model: character, attributes: ["img", "name"] }
        });
        res.send(response);
    }
    else {
        response = await character.findAll({attributes:['img','name']})
        res.send(response)
    }
}