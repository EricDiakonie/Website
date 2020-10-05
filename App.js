const express = require("express");
const app = express();
app.listen(3000, function()
{
    console.log("hi");
})

app.get("/", function(req, res)
{
    res.send("hello");
})

app.get("/welcome.html", function(req, res)
{
    res.send(5 + 12);
})