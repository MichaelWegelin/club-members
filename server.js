var express = require("express")
var bodyParser = require("body-parser")
var Member = require("./models/member")

var app = express()
app.use(bodyParser.json())
app.use("/api/members", require("./controllers/api/members"))
app.use("/", require("./controllers/static"))

app.listen(3000, function() {
  console.log("Server listening on", 3000)
})
