var Client = {};


Client.socket = io.connect();

Client.sendTest = function(){
    console.log("test sent");
    Client.socket.emit('test');
};

Client.askNewPlayer = function(){
    Client.socket.emit('newplayer');
};

Client.socket.on('allplayers',function(data){
//display on score board maybe?????
});

Client.socket.on('pageChange',function(){

});