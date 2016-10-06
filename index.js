/**
 * Created by Administrator on 2016/9/27.
 */
var app = require('express')();//引入express模块，并运行
var http = require('http').Server();//引入http模块，用于http请求

app.get('/',function(request,response){

  response.send('hello word');

});

  http.listen(3344,function(){
      console.log('serve start');
  });





