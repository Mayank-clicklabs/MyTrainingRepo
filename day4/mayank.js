var x=require('./mayank.json');
function validate(){
    var Id = document.getElementById("Id").value;
    var Password = document.getElementById("Password").value;
    if ( Id == x.id && Password == x.password){
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var html=http.readFileSync(__dirname+ 'mayank.htm');
    res.end(html);
}).listen(1337,'192.0.0.1');
    }
}