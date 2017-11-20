function Emitter(){
 this.events={};   
}
Emitter.prototype.on = function(type,lisener){
    this.events[type]=this.events[type] || [];
this.events[type].push(lisener);
}


Emitter.prototype.emit = function(type){
    if(this.events[type]){
        this.events[type].forEach(function(lisener) {
lisener();            
        });
    }
}


module.exports = Emitter;
