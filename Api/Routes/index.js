let express = require("express");
let router = express.Router();
const moviesRouter =require('./movies')
const characterRouter=require('./characters')
const authRouter=require('./auth')
const validate =require('../Utilities/validate')

router.use('/auth',authRouter)
router.use('/character',validate,characterRouter)
router.use('/movie',validate,moviesRouter)



module.exports = router