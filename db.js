var mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/club", function() {
  console.log("mongodb connected")
})

module.exports = mongoose
