var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var players = {};
var fs = require('fs')


app.use(express.static(__dirname + '/public'));
app.use('/demo11.css',express.static(__dirname + '/demo11.css'));
app.use('/answerid.js',express.static(__dirname + '/answerid.js'));
app.use('/AnswerQuestion.js',express.static(__dirname + '/AnswerQuestion.js'));
app.use('/Counter.js',express.static(__dirname + '/Counter.js'));
app.use('/functionality.js',express.static(__dirname + '/functionality.js'));
app.use('/Getid.js',express.static(__dirname + '/Getid.js'));
app.use('/main.js',express.static(__dirname + '/main.js'));
app.use('/Next.js',express.static(__dirname + '/Next.js'));
app.use('/NextPage.js',express.static(__dirname + '/NextPage.js'));
app.use('/PickQuestion.js',express.static(__dirname + '/PickQuestion.js'));
app.use('/ResultPage.js',express.static(__dirname + '/ResultPage.js'));
app.use('/ScoreBoard.js',express.static(__dirname + '/ScoreBoard.js'));
app.use('/typename.js',express.static(__dirname + '/typename.js'));
app.use('/validateName.js',express.static(__dirname + '/validateName.js'));
app.use('/CheckAnswers.js',express.static(__dirname + '/CheckAnswers.js'));



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
