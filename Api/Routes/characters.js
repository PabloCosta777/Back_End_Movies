let express = require("express");
let router = express.Router();
let getCharacter=require('../Controllers/getCharacter')
let getCharacterById=require('../Controllers/getCharacterById')


router.get("/",getCharacter);
router.get("/:id", getCharacterById);
router.post("/", async (req, res) => {});
router.put("/", async (req, res) => {});
router.delete("/", async (req, res) => {});

module.exports = router;
