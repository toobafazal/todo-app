var list = document.getElementById("list");
function addTodo(){
    var todo_item = document.getElementById("todo-item");

    // create li with text node
    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value);
    li.appendChild(liText)


// create delete button 
var delbtn = document.createElement('button')
var delText = document.createTextNode("delete")
delbtn.appendChild(delText)
delbtn.setAttribute("class","btn")
delbtn.setAttribute("onClick","deleteItem(this)")

    li.appendChild(delbtn)
    list.appendChild(li)
    todo_item.value = " ";
    console.log(li)
}
function deleteItem(e){
    
    e.parentNode.remove()
}