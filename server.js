var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var players = {};
var fs = require('fs')


app.use(express.static(__dirname + '/public'));
app.use('/demo11.css',express.static(__dirname + '/demo11.css'));
app.use('/js',express.static(__dirname + '/js'));

app.get('/', function (req, res) {
   res.sendFile(__dirname + '/index.html');
});

var players = {}
//var timer = setTimeout(, 3000);

io.on('connection', function (socket) {
  socket.on('newplayer',function(){
       players[socket.id] = {
           user: name,
           points: score
       };
       socket.emit('allplayers',players);
       socket.broadcast.emit('newplayer', players[socket.id]);

       socket.on('timer',function(){
          io.emit('',players);
       });

       socket.on('disconnect',function(){
          delete players[socket.io]
          io.emit('allplayers',players);
       });
   });

});

server.listen(8081, function () {
   console.log(`Listening on ${server.address().port}`);
});
