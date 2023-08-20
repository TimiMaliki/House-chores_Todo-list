const form = document.getElementById("new-task-form");
const input = document.getElementById("new-task-input");
const listEl = document.querySelector("#tasks");
const newTaskSubmit = document.getElementById("new-task-submit");

//the submit form task eventListener

newTaskSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  const task = input.value; // the input.value are the texts you provide in the input form

  input.value = "";

  if (!task) {
    alert("fill the form");
    return;
  }

  const taskEl = document.createElement("div"); //createElement allows me to create DOM notes
  taskEl.classList.add("task");

  const taskContentEl = document.createElement("div");
  taskContentEl.classList.add("content");
  taskContentEl.innerHTML = task;

  taskEl.appendChild(taskContentEl);

  const actionEl = document.createElement("div");
  actionEl.classList.add("btn-actions");

  const deleteEl = document.createElement("button");
  deleteEl.classList.add("delete");
  deleteEl.innerHTML = "Delete";

  actionEl.appendChild(deleteEl);

  taskEl.appendChild(actionEl);
  taskEl.appendChild(deleteEl);

  listEl.appendChild(taskEl);


  taskContentEl


  deleteEl.addEventListener('click' , (e) =>{
    if(deleteEl !== taskEl){
        listEl.removeChild(taskEl)
    }
  })
  
});
