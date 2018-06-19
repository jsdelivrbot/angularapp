var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.static("public"));

var data = fs.readFileSync('./public/index.html');

app.get('/', function(req, res) {
    res.write(data.toString());
    //res.render('index',{title:'Home'});
});

var port = Number(process.env.PORT || 3000)
app.listen(port);



