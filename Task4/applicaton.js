const yargs =require('yargs')
const myFunction=require('./Function')

yargs.command({

    command:'readApi',
    builder:{
    url:{
        type:"string",
        demandOption:true},
    },
    handler:function(argv) {
    myFunction.getdata(argv.url,(error, result)=>{

     if(error) console.log(error.message)
     else console.log(result)

    })    
    }
        
    
    
    
    })
    
    
    
    yargs.argv