const request = require('request')

const getdata = (url, callback)=>{
    
   
    
    request({ url , json:true }, (error, {body})=> {
        if(error) callback('error in api service', false)
        else if(body.error) callback('error inside api body', false)
        else callback(false, body)
    })
}

module.exports = {
    getdata
}