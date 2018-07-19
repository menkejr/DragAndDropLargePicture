var express = require('express');
var path = require('path');
var picData = require('./controllers/picData');

var app = express();
var rootPath = path.normalize(__dirname + '/../');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({limit : '100mb'}));


app.use(express.static(rootPath + 'client'));

app.use('/api/picSave', picData.savePic); 
//app.use('/api/picsGet', picData.getPics); 
//app.use('/api/order', picData.saveOrder);
app.use('/api/picGet/:id', picData.getPic); 

app.listen(8000);

console.log("Listening on port 8000...");
