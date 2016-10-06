
/*爬取页面中想要的内容，以一定的格式输出*/
var http = require('http');
var cheerio = require('cheerio');//先在命令行中安装cheerio模块  npm install cheerio

var url = 'http://www.imooc.com/learn/483';//要爬取数据的url

function filterChapters(html){
  var $ =cheerio.load(html)
    var chapters = $('.chapter')//获取一个div
    //[{
    //    chaptertitle:'',
    //    videos:[
    //        title: '',
    //        id: ''
    //    ]
    //}]
    var coursedata = []
    chapters.each(function(item){
        var chapter = $(this)
        var chapertitle = chapter.find('strong').text()
        var videos = chapter.find('.video').children('li')
        var chapterdata = {
            chapertitle :chapertitle,
            videos:[]
        }
        videos.each(function(item){
            var video = $(this)
            var videotitle = video.text()
            //居然说找不到split
            //var  id = video.attr('href').split('video/')[1]
            var  id = video.attr('href')
            chapterdata.videos.push({
                title:videotitle,
                id:id
            })
        })

        coursedata.push(chapterdata)
    })

    return coursedata
}


function printCourseInfo(coursedata){
    coursedata.forEach(function(item){

         var chaptertitle = item.chapertitle
         console.log(chaptertitle)

         item.videos.forEach(function(video){
             console.log('<'+video.id+'>'+video.title)
         })
     })
}


http.get(url,function(res){
    var html = ''
    res.on('data',function(data){
        html += data
    })

    res.on('end',function(){
        var coursedata = filterChapters(html)
        printCourseInfo(coursedata)
    })
}).on('error',function(){
    console.log('获取课程数据出错')
})