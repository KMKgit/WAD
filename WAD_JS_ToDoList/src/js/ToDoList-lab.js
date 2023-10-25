const tasks = document.getElementsByTagName("li");

function createDeleteButton(task){
    const textNode = document.createTextNode("Delete");
    const buttonElement = document.createElement("button");
    buttonElement.className = "close";
    buttonElement.appendChild(textNode);
    buttonElement.addEventListener("click", () => {
        task.style.display = "none";
    })
    return buttonElement;
}

for(const task of tasks){
    const buttonElement = task.appendChild(createDeleteButton(task));
    task.appendChild(buttonElement);
}

function markChecked(event){
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
    }
}

function newTask() {
    const inputText = document.getElementById("myInput").value.trim();
    if (inputText === "") {
        alert("Please enter something useful!");
        return;
    }
    var text = document.createTextNode(inputText);
    var listItem = document.createElement("LI");
    listItem.appendChild(text);
    var tasks = document.getElementById("myUL");

    const buttonElement = createDeleteButton(listItem);
    listItem.appendChild(buttonElement);

    tasks.appendChild(listItem);
    document.getElementById("myInput").value = "";
}

document.querySelector("ul").addEventListener("click", markChecked)