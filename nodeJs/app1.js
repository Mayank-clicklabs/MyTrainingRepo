var EventEmitter = require('events')
var util = require('util')

function greetr(){
    this.greeting='hello';
}
util.inherits(greetr,EventEmitter);
greetr.prototype.greet=function(data){
    console.log(this.greeting +':'+ data);
    this.emit('greet',data);

}
var grr=new greetr();
grr.on('greet',function(data){
console.log('hi '+data)
});

grr.greet('kie');