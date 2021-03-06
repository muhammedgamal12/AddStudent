const fs =require('fs')
const chalk=require('chalk')

const readTasks=()=>{
    try{
        Tasks=JSON.parse(fs.readFileSync('Tasks'))
      return Tasks
    }
    catch(e){
return []
    }
}
const WriteTasks=(task)=>{
    try{
    fs.writeFileSync('Tasks',JSON.stringify(task))
    }
catch(e){
console.log("nofile created")
}
}


const addTask=(title,content)=>{
    myTasks=readTasks()

    const searchval=myTasks.find(task=> task.Title==title)
    console.log(searchval)
    if(!searchval){
Tasks={
Title:title,
Content:content,
Status:false
}

myTasks.push(Tasks)
WriteTasks(myTasks)
console.log(chalk.green.inverse(" added"))
    }
    else{console.log(chalk.red.inverse("this task title is already added"))}
}


const deleteTask=(title) =>{
     tasks = readTasks()
    const tasksAfterDelete = tasks.filter( task => task.Title!==title )

    if(tasks.length > tasksAfterDelete.length){
        WriteTasks(
            
        )
        console.log(chalk.green.inverse('task deleted'))    
    }
    else{
        console.log(chalk.red.inverse('task not found'))
    }
}
const updateTask = (title, newTitle, newContent) =>{
    const tasks = readTasks()
    const index = tasks.findIndex(task=> task.Title == title)
    if(index==-1) console.log(chalk.red.inverse('task not found'))
    else{
        tasks[index] = {
            title: newTitle, 
            content: newContent, 
            status:tasks[index].status
        }
        WriteTasks(tasks)
        console.log(chalk.greenBright.inverse('task edited successfully'))
    }
}
const showTasks =() =>{
    const tasks = readTasks()
    if(tasks.length==0) console.log(chalk.yellow.inverse('no tasks yet'))
    else{
        tasks.forEach(task => {
            console.log(chalk.green.inverse(`title: ${task.Title} and content: ${task.Content}`))
        });
    }
}
const showTask = (title)=>{
    const tasks = readTasks()
    const task = tasks.find(task=> task.Title==title)
    if(!task) console.log(chalk.red.inverse('task not found'))
    else console.log(chalk.green.inverse(`title: ${task.Title} and content: ${task.Content}`))

}
const changeStatus = (title, newStatus) =>{
    const tasks = readTasks()
    const index = tasks.findIndex(task=> task.Title == title)
    if(index==-1) console.log(chalk.red.inverse('task not found'))
    else{
        tasks[index] = {
            title: tasks[index].Title, 
            content: tasks[index].Content, 
            status:newStatus
        }
        WriteTasks(tasks)
        console.log(chalk.greenBright.inverse('Status Changed successfully'))
    }
}
module.exports = {
    addTask,
    deleteTask, 
    updateTask,
    showTasks,
    showTask,
    changeStatus
}
