let myMainForm = document.getElementById("mainForm");
let myMainField = document.getElementById("mainField");
let myMainList = document.getElementById("mainList");

myMainForm.addEventListener("submit", (i) => {
  i.preventDefault();
  addTodoList(myMainField.value);
});

function addTodoList(todoListValue) {
  if (todoListValue === "") {
    alert("You didn't type anything!");
  } else
  {
    let addList = `<li>${todoListValue} <button onclick="removeTodoList(this)">Delete</button> </li>`;
    myMainList.insertAdjacentHTML("beforeend", addList);
    myMainField.value = "";
    myMainField.focus();  
  }
}

function removeTodoList(todoListValue) {
  todoListValue.parentElement.remove();
}
