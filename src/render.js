const mainForm = document.getElementById("main-form");
const inputField = document.getElementById("main-field");
const formList = document.getElementById("main-list");

mainForm.addEventListener("submit", (i) => {
  i.preventDefault();
  addTodoList(inputField.value);
});

function addTodoList(todoListValue) {
  if (todoListValue === "") {
    alert("You didn't type anything!");
  } else {
    let addList = `<li>${todoListValue} <button onclick="removeTodoList(this)">Delete</button> </li>`;
    formList.insertAdjacentHTML("beforeend", addList);
    inputField.value = "";
    inputField.focus();
  }
}

function removeTodoList(todoListValue) {
  todoListValue.parentElement.remove();
}
