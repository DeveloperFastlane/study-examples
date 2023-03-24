document.getElementById("addBtn").addEventListener("click", addTodo);

function addTodo() {
  const input = document.getElementById("todoInput");
  const text = input.value.trim();

  if (text) {
    const listItem = document.createElement("li");
    listItem.textContent = text;

        const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");

    listItem.appendChild(deleteBtn);
    document.getElementById("todoList").appendChild(listItem);

    deleteBtn.addEventListener("click", () => {
      listItem.remove();
    });

    listItem.addEventListener("click", () => {
      listItem.classList.toggle("complete");
    });

    input.value = "";
  }
}