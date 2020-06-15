const mongodb = require("mongodb")

const connectionString = 'mongodb+srv://Peace:Peaceblessing@1@cluster0-ra4ct.mongodb.net/myArticle?retryWrites=true&w=majority'

mongodb.connect(connectionString,{ useNewUrlParser:true, useUnifiedTopology:true }, function(err,client){

    module.exports = client.db()
    const app = require ("./app")
    app.listen(3000)
})