const http=require('http');
const fs=require('fs');
const path=require('path');

const port=8000;

const server=http.createServer((req,res)=>{
  
});

server.listen(port,()=>{
  console.log("Server is working on 8000 ")
})
