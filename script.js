
let myInput = document.getElementById("myInput");
let todoContainer = document.getElementById("todoContainer");

function addTodo(){
  let inputValue = myInput.value.trim();
  let div = document.createElement("div");

  div.textContent = inputValue;

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete"
  deleteBtn.onclick = function(){
    div.remove();
  }

  todoContainer.appendChild(div);
  div.appendChild(deleteBtn);

  myInput.value = "";
}