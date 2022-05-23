let express = require("express");
let router = express.Router();

router.get("/", (req, res) => {
  res.send("esto es la ruta characters .get");
});

module.exports = router;
