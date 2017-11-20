

'use strict'

const Hapi = require('hapi');
                    // [1const server = new Hapi.Server();
const Path = require("path")
const server=new Hapi.Server();


server.connection({
   host:'localhost',
    port: 3000

});
                  // [2]
  server.route({
    method: 'GET',
    path: '/',
    handler: (request,reply) =>{
const headers=request.headers;
const cacheControl = 

console.log(headers)
reply(headers)
    }                                          // [3]
                                                  // [3]
  });





server.start((err) => {
    if(err){
      console.log(err)
     }
    else{
      
    console.log(`Server running at: ${server.info.uri}`);
    }
  });
