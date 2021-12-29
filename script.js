document.querySelector("#add").onclick = function() {
    if(document.querySelector('#newtask input').value.length == 0) {
        alert("Please enter a task!")
    }
    else {
        document.querySelector('#tasks').innerHTML 
        += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector
                    ('#newtask input').value}
                </span>
            </div>
        `;
    }
}