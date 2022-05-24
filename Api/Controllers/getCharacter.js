const character =require('../Models/character')
module.exports = async(req,res)=>{
    let response = await character.findAll({attributes:['img','name']})
}