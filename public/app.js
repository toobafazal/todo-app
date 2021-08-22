var list = document.getElementById("list");
var ul = document.getElementById("ul");

firebase.database().ref('todos').on('child_added',function(data){

    // create li with text node
    var li = document.createElement('li')
    li.setAttribute("class","todo-value")

    var liText = document.createTextNode(data.val().value);
    var delbtn = document.createElement('button')
var delText = document.createTextNode("DELETE")
delbtn.setAttribute("class","btn2")
delbtn.setAttribute("onClick","deleteItem(this)")
delbtn.setAttribute("id",data.val().key)


// create edit button 
var editbtn = document.createElement('button')
var editText = document.createTextNode("EDIT")
editbtn.setAttribute("class","btn1")
editbtn.setAttribute("onClick","editItem(this)")
editbtn.setAttribute("id",data.val().key)



    delbtn.appendChild(delText)
    editbtn.appendChild(editText)
    li.appendChild(liText)
    li.appendChild(editbtn)
    li.appendChild(delbtn)
    list.appendChild(ul)
    ul.appendChild(li)
    // console.log(li)
})
function addTodo(){
    var todo_item = document.getElementById("todo-item");
if(todo_item == ""){
    alert("enter any todo");
}
else{

    var key = firebase.database().ref().push().key;
    firebase.database().ref('todos').child(key).set({
        value: todo_item.value,
        key:key,
    })
    todo_item.value= "";


}
}
function deleteItem(f){
    firebase.database().ref('todos').child(f.id).remove()
    f.parentNode.remove()
}
function deleteAll(){
    firebase.database().ref('todos').remove()
    list.innerHTML = ""
}
function editItem(e){
//     var change = e.parentNode.firstChild.nodeValue;
//     var editvalue = prompt("Edit Todo",change)
//     e.parentNode.firstChild.nodeValue = editvalue
var val = prompt("Enter your value you want to be edited",e.parentNode.firstChild.nodeValue)|| e.parentNode.firstChild.nodeValue;
if(val == "" || val == " " || val == "  "){
    e.parentNode.firstChild.nodeValue = e.parentNode.firstChild.nodeValue
}else{
  firebase.database().ref('todos').child(e.id).set({
      value : val,
      key: e.id,
  })
  e.parentNode.firstChild.nodeValue = val;
}

}
