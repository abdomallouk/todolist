const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const button = document.getElementById("button")


function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
  }


function addTask(){
    if(inputBox.value.length > 0 ){
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        li.style.backgroundColor = getRandomColor();
        li.className = 'stylied-li';

        // Create a span for delete icon
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        span.className = 'deleteSpan'

        // Create a span for edit icon
        let editSpan = document.createElement("span");
        editSpan.className = "fas fa-pen edit-icon";


        li.appendChild(span);
        li.appendChild(editSpan); // Add the edit icon


        listContainer.appendChild(li);

        // saveData()
        inputBox.value = "";
    }
    

}


button.addEventListener('click', addTask)


inputBox.addEventListener('keypress', function(event) {
    if(event.keyCode === 13 ){
        addTask()
        // saveData()
    }
})





listContainer.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        // saveData()
    }

    else if (e.target.className === "deleteSpan"){
        e.target.parentElement.remove();
        // saveData()
    }

    else if (e.target.className === "fas fa-pen edit-icon") {
        const listItem = e.target.parentElement;
        // const newText = prompt("Edit the task:", listItem.innerText);
        const newText = prompt("Edit the task:", listItem.textContent);

        if (newText !== null) {
            listItem.textContent = newText;
            // saveData();
        }
    }
}, false);





function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// showTask();
//--------------don't change ---------------------------
