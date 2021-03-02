var mydiv=document.querySelector('#taskWrapper')

var createNewElement=(parent,element,txt,classes)=>{

newelement=document.createElement(element)
parent.appendChild(newelement)
if(txt!='')newelement.innerText=txt
if(classes!='')newelement.classList=classes
return newelement
}


createDesign=(tasks)=>{

    tasks.forEach(element => {
     
        var div=createNewElement(mydiv,'div','','col-4 my-3')
        const div2 = createNewElement(div, 'div', '','m-2 border border-primary boder-5 rounded')
        createNewElement(div2, 'h4', `title: ${element.title}`,'')
        let status = (element.completed)?'completed':'running'
        createNewElement(div2, 'h5', `status: ${status}`, 'text-danger')
        


    })
}



 gitData=async()=>{
     try{
let data=await fetch('https://jsonplaceholder.typicode.com/todos')
let tasks= await data.json()
console.log()
createDesign(tasks)
     }
     catch(e){
        createNewElement(taskWrapper, 'div', e.message, 'col-12 alert alert-danger')

    
     }
}

gitData()