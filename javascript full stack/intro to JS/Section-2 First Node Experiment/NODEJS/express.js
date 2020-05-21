let express = require("express")
let ourApp = express()
ourApp.get('/',function(req,res)
{
res.send(`
<form action="/answer" method="POST">
<p> What color is the sky on a clear and sunny day?</p>
<input name="skyColor" autocomplete="off">
<button>Submit Answer</button>
</form>
`)
})

ourApp.listen(3000)