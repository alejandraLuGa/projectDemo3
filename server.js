var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);
var players = {};
var fs = require('fs')


app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    console.log('a user connected');
    //creates a new player when someone joins using the socket id and setting points to 0
    players = JSON.parse(fs.readFileSync ('players.txt', 'utf8'));
    console.log(players);
    players[socket.id] = {
        playerId: socket.id,
        points: 0
    };
    fs.writeFileSync ('players.txt', JSON.stringify(players));
    // send the players object to the new player
    socket.emit('currentPlayers', players);
    // update all other players of the new player
    socket.broadcast.emit('newPlayer', players[socket.id]);

    socket.on('disconnect', function () {
        console.log('user disconnected');
        // remove this player from our players object
        players = JSON.parse(fs.readFileSync ('players.txt', 'utf8'));
        delete players[socket.id];
        fs.writeFileSync ('players.txt', JSON.stringify(players));
        // emit a message to all players to remove this player
        io.emit('disconnect', socket.id);
    });

    //this will update each players points after each round of questions
    socket.on('playerPoints', function (pointsData) {
        players[socket.id].points += pointsData.points;
        //console.log('player points: ' + players[socket.id].points);
        // emit a message to all players about the points of the player
        socket.broadcast.emit('playerPoints', players[socket.id]);
    });
});

server.listen(8081, function () {
    console.log(`Listening on ${server.address().port}`);
});
