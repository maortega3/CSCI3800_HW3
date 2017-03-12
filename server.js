// <mark.ortega@ucdenver.edu>
// Assignment for web api 3800. Main Proxy (Lacking Functionality Especially in error handling..)
var express = require('express');
var app = express();
var localPort = 9000;
// A Call to the Base route will instantiate an instance of gihub
app.get('/', function (req, res) {
    console.log("Ping home");
    //We have a GET to our base url now we will create our github variables  
    var GitHubApi = require("github");  
    var github = new GitHubApi({
        version: "3.0.0"
    });


    var token =  "THE TOKEN WOULD GO HERE"; //DON'T STORE ON GITH
    github.authenticate({
        type: "oauth",
        token: token
    });

    github.user.get({ user: 'maortega3'} , function(err, res) {
        console.log("GOT ERR?", err);
        console.log("GOT RES?", res);
        res.send(res);
    });
})

// The server is listnening
var server = app.listen(localPort, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("We are on: ", host, port)
}) 
