  //载入events事件模块的eventemitter
  var EventEmitter = require('events').EventEmitter
  var life = new EventEmitter()

  //设置事件最大监听（针对每种事件） 默认为10个
  //官方说明超过十个会造成内存泄露，最好不要超过十个
  life.setMaxListeners(11)
  //监听事件 on   对一个事件不要超过10个监听器 (事件名，事件触发后执行的动作）
  life.on('eventname',function(who){
      console.log('give '+who+' 倒茶')
  })
  life.on('eventname',function(who){
      console.log('give '+who+' 做饭')
  })
  life.on('eventname',function(who){
      console.log('give '+who+' 洗衣服')
  })

  //一次删除某EventEmitter对象的所有事件的所有监听器：
 // life.removeAllListeners()
  //一次删除某EventEmitter对象的某一事件的所有监听器：
 // life.removeAllListeners('事件名称')
 // 两种方法获取某一事件的监听器个数：
 // life.listeners('事件名称').length
 // EventEmitter.listenerCount(life, '事件名称')


  //发出事件 emit
  var haslistenter = life.emit('eventname','me')

//haslistenter返回值为true则说明该事件有被监听 ，false则表明事件未被监听
  console.log(haslistenter)
