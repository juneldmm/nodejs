
var app = require('express')();//引入express模块，并运行
var http = require('http').Server(app);//引入http模块，用于http请求

var io = require('socket.io')(http)//引入socket模块，同时将http传进去，用它的方法

app.get('/',function(request,response){

  response.sendFile(__dirname+'/index.html');

});

io.on('connection',function(socket){
    socket.on('chat.message',function(message){
        //console.log('socket.io'+message);//message是用户输入的信息
        io.emit('chat.message',message);//通过emit方法，将信息广播给所有用户

    })

})

  http.listen(3222,function(){
      console.log('serve start');
  });






