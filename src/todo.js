const todoapp = document.querySelector(".toDoApp");
const anadir = document.getElementById("anadir");
const restar = document.getElementById("restar");

const todos = [];

anadir.addEventListener("click", () => {
  const todoName = document.getElementById("inputName");
  let what = todoName.value;

  todoName.textContent = "Manin ponga una vaina de vrd";

  todos.push(
    `
  <div class="todoCont">
    <input type="checkbox" name="todo" id="todo" />
    <label for="todo">${what}</label>
  </div>
  `
  );

  todoapp.innerHTML = todos.join("");
});
restar.addEventListener("click", () => {
  todos.pop();
  todoapp.innerHTML = todos.join("");
});
