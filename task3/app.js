const yargs=require('yargs')
const myFunctions=require('./Functions')

yargs.command({

command:'addTask',
builder:{
title:{
    type:"string",
    demandOption:true},
content:{
    type:"String ",
    demandOption:true}

},
handler:function(argv) {
myFunctions.addTask(argv.title,argv.content)    
}
})
yargs.command({
    command:'delete',
    builder:{
        title:{
            type:'string',
            demandOption:true
        }
    },
    handler:function(argv){
        myFunctions.deleteTask(argv.title)
    }
})
yargs.command({
    command:'update',
    builder:{
        searchtitle:{
            type:'string',
            demandOption:true
        },
        newTitle:{
            type:'string',
            demandOption:true
        },
        newContent:{
            type:'string',
            demandOption:true
        }
    },
    handler:function(argv){
        myFunctions.updateTask(argv.searchtitle, argv.newTitle, argv.newContent)
    }
})
//show all tasks
yargs.command({
    command:'showAll',
    describe: 'show all data for our tasks',
    handler: function(){
        myFunctions.showTasks()
    }
})
//show single task
yargs.command({
    command:'showTask',
    describe: 'show  data for one tasks',
    builder:{
        title:{
            type:'string',
            demandOption:true,
            describe:'task title'
        }
    },
    handler: function(argv){
        myFunctions.showTask(argv.title)
    }
})

yargs.command({

    command:'changeStatus',
    builder:{
    title:{
        type:"string",
        demandOption:true},
    newStatus:{
        type:"String ",
        demandOption:true}
    
    },
    handler:function(argv) {
    myFunctions.changeStatus(argv.title,argv.content)    
    }
    })
yargs.argv