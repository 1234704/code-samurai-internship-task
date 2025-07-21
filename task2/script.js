function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value;
  if (taskText === "") return;

  let li = document.createElement("li");
  li.textContent = taskText;

  let delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.onclick = function() {
    li.remove();
  };

  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
