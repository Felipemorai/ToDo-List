document.querySelector("#add").onclick = function() {
    if(document.querySelector('#newtask input').value.length == 0) {
        alert("Please enter a task!")
    }
}