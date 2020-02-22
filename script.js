var myList = document.querySelector('#myList')
var myButton = document.getElementById("myBtn")
var myHeading = document.getElementById("myHeading")
/*var listItems = document.getElementById("myList")
    .getElementsByTagName("li");*/

myList.addEventListener("click", activateClick)

function activateClick(e) {
    if (e.target.nodeName == "LI") {
        myHeading.innerHTML = e.target.innerHTML;
        for (i = 0; i < e.target.parentNode.children.length; i++) {
            e.target.parentNode.children[i].classList.remove("active")
        };
        e.target.classList.add("active");
    }
}

myButton.addEventListener("click", newItemFunc)

var num = 1

function newItemFunc() {
    myList.innerHTML += "<li class=list-group-item>New Item " + num + " - CLICK ME!</li>"
    num++
}