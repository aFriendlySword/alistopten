var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8080));

app.get('/',function(req, res) {
        res.sendFile(__dirname + '/index.html');
});
app.get('/style.css',function(req, res) {
        res.sendFile(__dirname + '/style.css');
});
app.get('/Client.js',function(req, res) {
        res.sendFile(__dirname + '/Client.js');
});
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
