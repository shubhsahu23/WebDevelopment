console.log("Hello, World!");
function say(){
  console.log("say function");
}
setTimeout(() => {
  say();
}, 2000);
for(let i=0;i<10;i++){
  console.log(i);
}