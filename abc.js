var express = require ('express');
var app =express();
app.get('/',function(req,res)
{
console.log("first page");
res.send('welcome to first page');

});
app.get('/sp',function(req,res)

{
console.log("second page");
res.send('welcome to second page');

});
app.get('/*tp',function(req,res)
{
console.log("first page");
res.send('welcome to new page');

});
var server=app.listen(2008,function(){
var host=server.address().address;
var port=server.address().port;
console.log("server listening at http://%s:%s",host,port);
});

