// selecting input and ul Tag

var input=document.getElementById("input")
var ul=document.getElementById("ul")

function add(){
    // creating new Element
    var li=document.createElement("li")

    li.innerHTML=input.value+"<button onclick='del(event)'>Delete</button>"
    ul.append(li)
}

function del(event){
    event.target.parentElement.remove()
}