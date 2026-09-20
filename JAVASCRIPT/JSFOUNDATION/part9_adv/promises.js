function fetchdata(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      let success=true;
      if(success){
        resolve("Data fetched sucessfully");
      }
      else{
        reject("Error fetching data");
      }
    },3000)
  });
}

// let response=fetchdata();
// console.log(response);

fetchdata().then((data)=>console.log(data)).catch((error)=>console.log(error));