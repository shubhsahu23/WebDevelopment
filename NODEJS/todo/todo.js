const fs=require('fs');
const { json } = require('stream/consumers');
const filePath="./tasks.json";

const loadTasks=()=>{
  try{
    const databuffer=fs.readFileSync(filePath);
    const datajson=databuffer.toString();
    return JSON.parse(datajson);
  }catch(error){
    return [];
  }
}

const listTasks=()=>{
  const tasks=loadTasks();
  tasks.forEach((task,index) => console.log(`${index+1}-${task.task}`));
}

const saveTasks=(tasks)=>{
  const datajson=JSON.stringify(tasks);
  fs.writeFileSync(filePath,datajson);
  console.log("Task added");

}

const remove=(index)=>{
  const tasks= loadTasks();
   tasks.splice(index - 1, 1);
  saveTasks(tasks);
  console.log("Task removed successfully");
}

const addTask=(task)=>{
  const tasks=loadTasks();
  tasks.push({task});
  saveTasks(tasks);
}


const command=process.argv[2]
const argument=process.argv[3]

if (command==='add'){
  addTask(argument);
}else if(command==='list'){
  listTasks();
}else if(command==='remove'){
  remove(parseInt(argument));
}else{
  console.log("Invalid Command");
}