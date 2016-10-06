var http=require('http')
var querystring = require('querystring')//将对象序列化
var postData =querystring.stringify({
    'content':'有大把时光哟',
    'itemid':4619
})
var options ={
    hostname : 'cn.ttfly.com',
    port:80,
    path :'/file/script/config.js',
    method:'POST',
    headers:{
        'Accept':'*/*',
 'Accept-Encoding':'gzip, deflate, sdch',
 'Accept-Language':'zh-CN,zh;q=0.8,en;q=0.6',
 'Cache-Control':'no-cache',
        'Content-Length':postData.length,
        'Content-Type':'application/x-javascript',
 'Connection':'keep-alive',
 'Cookie':'bdshare_firstime=1471932023446; OUTFOX_SEARCH_USER_ID_NCOO=881924801.1961933; __utma=33709796.15296128.1471337254.1472805662.1473236204.5; __utmz=33709796.1471337254.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); PHPSESSID=5cnd43rpht4ltkqr1ti1gqbqi6; Hm_lvt_77daf5c3b56239ae6b3bedec0662998d=1473231087,1473318840,1475722897; Hm_lpvt_77daf5c3b56239ae6b3bedec0662998d=1475722900; __unam=cbf2dfd-156777c4b03-25b2ec9b-551; Hm_lvt_784d719165bf6ed041c9df02e036c85c=1473233036,1475714355,1475718763; Hm_lpvt_784d719165bf6ed041c9df02e036c85c=1475725196; DVH_forward_url=http%3A%2F%2Fcn.ttfly.com%2Fsell%2Fshow-htm-itemid-4619.html; DVH_auth=68e6ij4sXIG-S-lVo2E58cKLDoGEF8pPhR38w8DMdEJ2DBSyvr9DVA1DyvYSKGikiZjWPVjfSXz8hPABh41Fy9fPm9; DVH_username=hongyeroot01; Hm_lvt_4ab49848f48ac12b442a8805eef324ff=1473239496,1475722450; Hm_lpvt_4ab49848f48ac12b442a8805eef324ff=1475725230',
 'Host':'cn.ttfly.com',
 'Pragma':'no-cache',
 'Referer':'http://cn.ttfly.com/api/comment.php',
 'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36'
  }
}

var req =http.request(options,function(res){
    console.log('status:'+res.statusCode);
    console.log('headers:'+JSON.stringify(res.headers));


    res.on('data',function(chunk){
        console.log(Buffer.isBuffer(chunk))
        console.log(typeof chunk);
    })

    res.on('end',function(){
        console.log('评论完毕')
    });

    res.on('error',function(e){
        console.log('Error:'+e.message)
    })

})

req.write(postData);
req.end();
