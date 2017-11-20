var object={};
var urld='www.abc.com/?name=mayank&age=21&height=5.7'
urld.replace(
    new RegExp("([^?=&]+)(=([^&]*))?","g"),
    function($0,$1,$2,$3)
    {
        object[$1]=$3;
    }
);
console.log(object);
console.log(JSON.stringify(object));