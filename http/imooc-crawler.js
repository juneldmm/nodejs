
   /*爬取页面源代码*/
    var http = require('http');//引入模块
    var url = 'http://www.imooc.com/learn/483';
    http.get(url,function(res){
        var html = ''
        res.on('data',function(data){
            html += data
        })

        res.on('end',function(){
            console.log(html)
        })
    }).on('error',function(){
        console.log('获取课程数据出错')
    })