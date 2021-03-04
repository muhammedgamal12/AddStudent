const fs = require('fs')
const readFile = function(){
    try{    
        customers = JSON.parse(fs.readFileSync('customer.json').toString())
    }
    catch(e){
        customers = []
    }
    return customers
}
const writeFile = function(customers){
    fs.writeFileSync('customer.json', JSON.stringify(customers))
}
const addNewCustomer=function(cust){
    customers= readFile()
    customers.push(cust)
    writeFile(customers)
}
const showAll = function(){
    cust= readFile()
    cust.forEach(customer => {
        console.log(`customer id: ${customer.id} and his name is ${customer.name} and his balance now is ${customer.balance}`)
    });
}
const del = function(custid){
    let customers = readFile()
    index = customers.findIndex(cust=>{
        return cust.id == custid
        
    })
    if(index==-1) console.log('customer not found')
    else
    {
        customers.splice(index, 1)
        writeFile(customers)
        console.log('deleted')
    }
}
const update = function(id, newData){
    let customers = readFile()
    index = customers.findIndex(cust=>{
        return cust.id == id
    })
    if(index==-1) console.log('customer not found')
    else
    {
        customers[index] = newData
        writeFile(customers)
    }
}

module.exports = {addNewCustomer, showAll, del, update}