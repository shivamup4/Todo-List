const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type ='text']")
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (e)=>{
    e.preventDefault();                     //It is used to stop page from being refresh
    const newTodoText = todoInput.value;           //We have stored the value of input by user
    const newLi = document.createElement("li");
    const newLiinnerHTML = `<span class="text">${newTodoText}</span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>`;
    newLi.innerHTML = newLiinnerHTML;
    todoList.append(newLi)
    todoInput.value = "";  //It will remove text from the text fom the input box after adding
})

todoList.addEventListener("click", (e)=>{
    if (e.target.classList.contains("done")){
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through";
    }

    if(e.target.classList.contains("remove")){
        const targetedLi = e.target.parentNode.parentNode;
        targetedLi.remove();
    }
})
