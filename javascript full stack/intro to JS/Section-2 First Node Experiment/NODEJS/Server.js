let http = require("http")

let ourApp = http.createServer(function(req,res){

    console.log(req.url)
    res.end("Hello welcome to our website")
})
ourApp.listen(3000)