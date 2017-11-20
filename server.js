

const Hapi = require('hapi')
const server=new Hapi.Server()

server.connection({
  host:'localhost',
  port:3000
})

server.route({
  method:'GET',
  path: '/',
  handler:(req,rep) =>{
const data={
id:123,
name:'kie',
isDevloper:true,
age:45,
func:function(){
  return 1
}
}
rep(data).code(201)
  }
  
})


  server.start (function(err)  {
    if(err){
      throw err;
    }
    console.log('server started at: '+server.info.uri);
    })




