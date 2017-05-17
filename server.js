//Dependencies
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
//Port location
var server = app.listen(8000, function(){
  console.log("Listening on port 8000");
});
//File paths and partials
app.use(express.static(path.join(__dirname, "./client")));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set("views", path.join(__dirname, "./client"));
app.set("view engine", "ejs");
//Database in use
require("./config/mongoose.js");
//socket config
io = require("socket.io").listen(server);
io.sockets.on('connection', function(socket){
  console.log("Connected - SocketID:", socket.id);
  socket.on("disconnect", function(){
    console.log("Disconnected - SocketID:", socket.id);
  })
  socket.on("created_topic", function(data){
    socket.broadcast.emit("topic_added", data);
  })
});
require("./config/routes.js")(app);
