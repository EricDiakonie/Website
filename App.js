const express = require("express");
const app = express();

app.listen(3000, function()
{
    console.log("hi");
})

app.get("/login", function(req, res)
{
    
})

app.post("/login", function(req, res)
{
    var username = request.body.username;
	var password = request.body.password;
})