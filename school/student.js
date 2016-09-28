
  function add(student){
      console.log('add student:'+ student)
  }

  //误区：exports.add中的add并不是一个方法，而是要暴露的方法名
  exports.add = add