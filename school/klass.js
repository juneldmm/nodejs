var student = require('./student');//require加载模块
var teacher = require('./teacher');

function add(teachername,students){
    teacher.add(teachername)
    students.forEach(function(item,index){
        student.add(item)
    })
}

exports.add = add
//当我们想让模块导出的是一个对象时， exports 和 module.exports 均可使用（但 exports 也不能重新覆盖为一个新的对象），而当我们想导出非对象接口时，就必须也只能覆盖 module.exports
//module.exports = add