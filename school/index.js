var klass = require('./klass')
exports.add = function(klasses){
    klasses.forEach(function(item,index){
        var _klass = item//班级
        var teachername = item.teachername//班级对应的老师
        var students =item.students//班级里的学生
        klass.add(teachername,students)
    })
}
//klass.add('ddd',['ss','dfdf'])