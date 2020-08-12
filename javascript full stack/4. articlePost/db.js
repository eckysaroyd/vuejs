const dotenv = require('dotenv')
const mongodb = require("mongodb")
dotenv.config()
mongodb.connect(process.env.CONNECTIONSTRING,{ useNewUrlParser:true, useUnifiedTopology:true }, function(err,client){

    module.exports = client.db()
    const app = require ("./app")
    app.listen(process.env.PORT)
})