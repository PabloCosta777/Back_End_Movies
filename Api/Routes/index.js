let express = require("express");
let router = express.Router();
const moviesRouter =require('./movies')
const characterRouter=require('./characters')
const validate =require('../Utilities/validate')

router.get('/login',()=>{})

router.use('/character',validate,characterRouter)
router.use('/movie',validate,moviesRouter)



module.exports = router