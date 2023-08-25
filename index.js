const form = document.getElementById("new-task-form");
const input = document.getElementById("new-task-input");
const listEl = document.querySelector("#tasks");
const newTaskSubmit = document.getElementById("new-task-submit");

//the add task submit form  eventListener

newTaskSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  const task = input.value; // the input.value are the texts you provide in the input form

  input.value = "";
 // if user hasnt filled anything alert
  if (!task) {
    alert("fill the form");
    return;
  }

  const taskEl = document.createElement("div"); //createElement allows me to create DOM notes
  // that creates the task form
  taskEl.classList.add("task"); //added the class of task

  const taskContentEl = document.createElement("div");//createElement allows me to create DOM notes
  taskContentEl.classList.add("content");//added the class of content
  taskContentEl.innerHTML = task; // the textContent should be equall to inputvalue

  taskEl.appendChild(taskContentEl); //add the taskContent inside the created div

  const actionEl = document.createElement("div");//createElement allows me to create DOM notes
  actionEl.classList.add("btn-actions");//added the class of btn-actions

  const deleteEl = document.createElement("button"); // Dom element
  deleteEl.classList.add("delete");//added the class of delete
  deleteEl.innerHTML = "Delete";// textContent should be a string of "Delete"

  actionEl.appendChild(deleteEl);//add the delete button inside the created div

  //add the action btn and the delete btn inside the div taskEl created
  taskEl.appendChild(actionEl);
  taskEl.appendChild(deleteEl);
 //add the everything inside the form created
  listEl.appendChild(taskEl);



//the delete button eventlistener
  deleteEl.addEventListener('click' , (e) =>{
    if(deleteEl !== taskEl){
        listEl.removeChild(taskEl)
    }
  })
  
});
