let showHideBtn = document.querySelector('#showhide')
let studentTable = document.querySelector('#studentsTable')
let students = [
    {name:'GodFather', age:14,class:'c1',degree:32,grade:'Fail'}
]
let studentForm = document.querySelector('#addstudent')
let tableHeaders= ['id','name', 'age','class','degree','grade','actions']
let actions = [
    {txt:'Delete', classes:'btn btn-danger m-1'},
    {txt:'Edit', classes:'btn btn-primary m-1'},
    
]



showHideBtn.addEventListener('click', function(e){
    this.innerText=="add student"? this.innerText="hide form" : this.innerText="add student";
    studentForm.classList.toggle('d-none')
})
studentForm.addEventListener('submit',function(e){
    e.preventDefault()
    var gradest=''
    if(this.elements.degree.value>=90&&this.elements.degree.value<100)
    gradest='A'
    else if(this.elements.degree.value>=80&&this.elements.degree.value<00)
    gradest='B'
    else if(this.elements.degree.value>=70&&this.elements.degree.value<80)
    gradest="c+"
    else if(this.elements.degree.value>=60&&this.elements.degree.value<70)
    gradest="c"
    else if(this.elements.degree.value>=50&&this.elements.degree.value<60)
    gradest="c-"
    else if(this.elements.degree.value<50&&this.elements.degree.value>0)
    gradest="Fail"
    let student = {
        name: this.elements.name.value,
        age: this.elements.age.value,
        class: this.elements.room.value,
        degree: this.elements.degree.value,
        grade:gradest
    }
    students.push(student)
    this.reset()
    this.classList.toggle('d-none')
    showHideBtn.innerText="Add Student"
    showStudents()
})
let addElement = function(eleType, parent, txt='', classes=''){
    ele = document.createElement(eleType)
    if(txt!='') ele.innerText = txt
    if(classes!='') ele.classList=classes
    parent.appendChild(ele)
    return ele
}
let showStudents = function(){
    studentTable.innerText=''
    students.forEach((student, i)=>{
        tr = addElement('tr', studentTable)
        tableHeaders.forEach(element=>{ 
            if(element=="id") txt = i+1
            else if(element=='actions') txt = ''
            else txt=student[element]
            td = addElement('td', tr, txt)
        })
        actions.forEach(action=>{
            btn = addElement('button', td, action.txt, action.classes)
            btn.addEventListener('click',function(e){
                if(action.txt=='Edit') edit(i)
                else if(action.txt=='Delete') del(i)
                            
            })
        })
    })
}
function edit(index){
    let name= prompt('Enter New Name')
    students[index].name = name
    showStudents()
}
function del(index){
    students.splice(index,1)
    showStudents()
}


showStudents()




