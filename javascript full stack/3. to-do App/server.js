let express = require('express')
let mongodb = require('mongodb')
let sanitizeHTML = require('sanitize-html')

let app = express()
let db

app.use(express.static('public')) 



let connectionString = 'mongodb+srv://Peace:Peaceblessing@1@cluster0-ra4ct.mongodb.net/to-do-App?retryWrites=true&w=majority'
//mongodb.connect(a = connection striing,b,c)
mongodb.connect(connectionString, {useNewUrlParser: true}, function(err, client)
{
db = client.db()
app.listen(3000)
})
app.use(express.json())
app.use(express.urlencoded({extended: false}))

function passwordProtected(req,res,next){
 // console.log(req.headers.authorization)
  res.set('WWW-Authenticate','Basic realm="simpleApp"')
  if(req.headers.authorization == "Basic YWRtaW46YWRtaW4=")
  {
      next()
  }
  else{

    res.status(401).send("Authentication required")
  }

}
app.use(passwordProtected)

app.get('/',  function(req, res) {
  db.collection('items').find().toArray(function(err, items) {
    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>SIMPLE APP</title>
     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
     <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
     <link rel="shortcut icon" href="images/favicon.ico" />
    </head>
  <body>
  <div class="container">
  <h1 class="display-4 text-center py-1">SIMPLE APP</h1>
  
  <div class="jumbotron p-3 shadow-sm">
  <form id="create-form" action="/create-item" method="POST">
  <div class="d-flex align-items-center">
  <input id="create-field" name="item" autofocus autocomplete="off" class="form-control mr-3" type="text" style="flex: 1;">
  <button class="btn btn-primary">Add New Item</button>
  </div>
  </form>
  </div>
  
  <ul id="item-list" class="list-group pb-5">
  </ul>
  
  </div>
  
  <div class="card text-center">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body" style="color:elegant-color-dark">
    <h5 class="card-title"> MONGODB | EXPRESSJS | REACTJS | NODEJS</h5>
    <p class="card-text">This is a small project where you can learn using of MERN Stack in building a  Simple live project.<br>
    <center>You can run your project with </br>
    client-side rendering</br>
    read, write and delete data from database</br>
    and more other features.........
    </center>
    </p>
    <p>
     <a href ="https://www.facebook.com/Exchale"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
     <a href ="https://www.instagram.com/eckysaroyd_/?hl=en"><i class="fa fa-instagram" aria-hidden="true"></i>
     </a>
     <a href ="https://twitter.com/eckysaroyd"><i class="fa fa-twitter-square" aria-hidden="true"></i>
     </a>
     <a href ="https://github.com/eckysaroyd"><i class="fa fa-github-square"  style="color:elegant-color-dark" aria-hidden="true"></i>
     </a>
     <a href ="https://www.linkedin.com/in/eckysaroyd-nyato-45a59a125/"><i class="fa fa-linkedin-square" aria-hidden="true"></i>
     </a>

    </p>
  </div>
  <div class="card-footer text-muted">
 <i>	<b>&copy; eckysaroyd</b></i>
  </div>
  </div>
  
  <script>
  let items = ${JSON.stringify(items)}
  </script>
  

  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <script src="/browser.js"></script>
  </body>
  </html>`)
  })
})

app.post('/create-item', function(req, res) {
  let safeText = sanitizeHTML(req.body.text, {allowedTags: [], allowedAttributes: {}})
  db.collection('items').insertOne({text: safeText}, function(err, info) {
    res.json(info.ops[0])
  })
})

app.post('/update-item', function(req, res) {
  let safeText = sanitizeHTML(req.body.text, {allowedTags: [], allowedAttributes: {}})
  db.collection('items').findOneAndUpdate({_id: new mongodb.ObjectId(req.body.id)}, {$set: {text: safeText}}, function() {
    res.send("Success")
  })
})

app.post('/delete-item', function(req, res) {
  db.collection('items').deleteOne({_id: new mongodb.ObjectId(req.body.id)}, function() {
    res.send("Success")
  })
})

//nodemon - node start your app, and mon is monetary your app