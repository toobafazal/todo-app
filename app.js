var list = document.getElementById("list");
var ul = document.getElementById("ul")
function addTodo(){
    var todo_item = document.getElementById("todo-item");

    // create li with text node
    var li = document.createElement('li')
    li.setAttribute("class","todo-value")

    var liText = document.createTextNode(todo_item.value);

if(todo_item.value == ""){
    alert("enter any todo");
}
else{


// create delete button 
var delbtn = document.createElement('button')
var delText = document.createTextNode("DELETE")
delbtn.setAttribute("class","btn2")
delbtn.setAttribute("onClick","deleteItem(this)")

// create edit button 
var editbtn = document.createElement('button')
var editText = document.createTextNode("EDIT")
editbtn.setAttribute("class","btn1")
editbtn.setAttribute("onClick","editItem(this)")



    delbtn.appendChild(delText)
    editbtn.appendChild(editText)
    li.appendChild(liText)
    li.appendChild(editbtn)
    li.appendChild(delbtn)
    list.appendChild(ul)
    ul.appendChild(li)
    todo_item.value = " ";
    console.log(li)
}
}
function deleteItem(f){
    
    f.parentNode.remove()
}
function deleteAll(){
    list.innerHTML = ""
}
function editItem(e){
    var change = e.parentNode.firstChild.nodeValue;
    var editvalue = prompt("Edit Todo",change)
    e.parentNode.firstChild.nodeValue = editvalue
}