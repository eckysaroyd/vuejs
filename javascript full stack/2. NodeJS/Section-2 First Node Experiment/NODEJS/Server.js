let http = require("http")

let ourApp = http.createServer(function(req,res){

    //console.log(req.url)
    if(req.url=="/"){
        res.end("Hello welcome to our Homepage")
    }
    if(req.url=="/about"){
        res.end("thank you for visiting our Page")
    }
    res.end("We are not able to find your request")
})
ourApp.listen(3000)