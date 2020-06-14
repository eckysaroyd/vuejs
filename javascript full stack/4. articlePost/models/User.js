let User = function(data)
    {
        this.data = data
        this.errors = []
    }
    User.prototype.validate =function()
    {
        if(this.data.username == "") {this.errors.push("You must provide a  user name")}
        if(this.data.email == "") {this.errors.push("You must provide a valid Email Address")}
        if(this.data.password == "") {this.errors.push("You must provide a password")}

    }

    User.prototype.register = function(){

    //#step 1 : validate user Data
        this.validate()
    //#step 2 : Only if there are no validation errors,Then save the user data in to database

    }
module.exports = User