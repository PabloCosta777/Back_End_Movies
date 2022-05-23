let express = require("express");
let router = express.Router();

router.get("/", (req, res) => {
  res.send("esto es movies .get");
});

module.exports = router;
