const app =require('./App')
const DB = require('./db')
require('dotenv').config()




app.listen(process.env.PORT, () => {
    console.log('Server running on port' + process.env.PORT)
    DB.sync({ force: true }).then(
      console.log("Database synchronized successfully")
    );
});