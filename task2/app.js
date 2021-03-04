const yargs = require("yargs");
const myMethods = require('./Functions')
yargs.command({
    command: 'addCustomer',
    describe:'add new Customer',
    builder:{
        id:{ 
            type:'string', 
            demandOption:true
        },
       
        name:{
            type:'string', 
            demandOption:true
        },
        balance:{ 
            type:'string', 
            demandOption:true
        },
    },
    handler:function(argv){
        let customers = {id:argv.id, name:argv.name, bakance:argv.balance}
        myMethods.addNewCustomer(customers)
    }
})

yargs.command({
    command:'showAll',
    handler:function(){
        myMethods.showAll()
    }
})
yargs.command({
    command:'delete',
    builder: {
        id:{type:'string', demandOption:true}
    },
    handler:function(argv){
        myMethods.del(argv.id)
    }
})
yargs.command({
    command:'update',
    builder:{
        id:{type:'string', demandOption:true},
        name:{type:'string', demandOption:true},
        balance:{type:'string', demandOption:true},
        searchKey:{type:'string', demandOption:true}
    },
    handler:function(argv){
        let customers = {id:argv.id, name:argv.name, balance:argv.balance}
        myMethods.update(argv.searchKey, customers)
    }
})

yargs.argv