function fetchuserdata(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve({name:"Data",url:"www.google.com"})
    },3000);
  })
}

async function getuserdata() {
  try{
    console.log("data fetch started");
    const userdata=await fetchuserdata();
    console.log("user data",userdata);
    console.log("data fetch completed");
  }catch(error){
    console.log(error);
  }
}
getuserdata();