var express = require('express');
var app = express();
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var ping = require('periodic-ping').ping;

ping({appName: "top10test", frequency: 7200000});

var allData = [];
function doSomething() {
    var d = new Date(),
        h = new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), Math.ceil(d.getMinutes() + 1/10)*10, 0, 0),
        e = h - d;
    if (e > 100) { // some arbitrary time period
        setTimeout(doSomething, e);
    }
    // your code
    function readBody(xhr) {
        var data;
        if (!xhr.responseType || xhr.responseType === "text") {
            data = xhr.responseText;
        } else if (xhr.responseType === "document") {
            data = xhr.responseXML;
        } else {
            data = xhr.response;
        }
        return data;
    }

    var str = "";

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            str = readBody(xhr);
            str2 = str.slice(str.indexOf("<tr>"),str.lastIndexOf("</td>")+1);
            var x=[];
            for (var i=0;i<11;i++) {
              str3= str2.slice(str2.indexOf("<th>")+4,str2.indexOf("</tr>"))
              x.push(str3.slice(str3.indexOf("(")+1,str3.indexOf(")")));
              str2 = str2.slice(str2.indexOf("</tr")+5);
            }
            x[0]=[d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes()];
            for (var i=0;i<10;i++) {
              x[i+1]=eval(x[i+1]);
            }
            allData.push(x.concat());
        }
    }
    xhr.open('GET', 'https://alis.io/top10', true);
    xhr.send(null);

};
doSomething();

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
app.get('/finddata', function (req, res) {
    res.send(JSON.stringify(allData));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
