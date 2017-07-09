// app.js
const express = require('express');
const app = express();

app.get('/hello', function (req, res) {
  res.json({"hello": "world"})
})

app.get('/tasks',function(req,res){

  var tasks = []
  tasks.push({title: "Wash dishes"},{title: "Clean car"})
  res.json({"tasks":tasks})
})

//if (require.main === "module") {
  app.listen(3000, function () {
      console.log('Express running on http://localhost:3000/.')
  });
//}

module.exports = app;
