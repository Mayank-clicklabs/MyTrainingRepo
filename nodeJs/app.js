var Emitter= require('events')
var eventConfig=require('./config').events;

var emtr = new Emitter();


emtr.on(eventConfig.GREET,function(){
    console.log("hi");
});

emtr.on(eventConfig.GREET,function(){
    console.log("there");
});

emtr.emit(eventConfig.GREET);
console.log('hello');
