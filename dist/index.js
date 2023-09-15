import {initializeApp} from 'firebase/app'
import {getFirestore,collection, getDocs, addDoc , deleteDoc ,doc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB8vPPuayzoZ9mFL7VUGgaBtzd6PxBaSBk",
    authDomain: "personal-todo-project.firebaseapp.com",
    projectId: "personal-todo-project",
    storageBucket: "personal-todo-project.appspot.com",
    messagingSenderId: "472975031744",
    appId: "1:472975031744:web:043e9a3ae3403bfb281c25",
    measurementId: "G-2N0F4E6JZF"
  };

  // init firebase app
initializeApp(firebaseConfig)

//init serveices
 const db = getFirestore()

 //collection ref

 const colRef = collection(db , 'Plans')

 //get collection data

 getDocs(colRef)
 .then((snapshot)=>{ //promise
   let todos = []

   snapshot.docs.forEach((doc) =>{
    todos.push({...doc.data() , id: doc.id}) //looped over array
   })
   console.log(todos)
 })
 .catch((err) =>{
      console.log(err.message)
 })



const form = document.getElementById("new-task-form");
const input = document.getElementById("new-task-input");
const listEl = document.querySelector("#tasks");
const newTaskSubmit = document.getElementById("new-task-submit");

 
 //need to add a local storage

//the add-task submit form  eventListener to add new tasks
newTaskSubmit.addEventListener("click", (e) => {
  e.preventDefault(); //to prevent onreload submit to page
  const task = input.value; // the input.value are the texts you provide in the input form

  input.value = ""

addDoc(colRef , {
    workout:task
})
.then(() => {
    task.reset()
})


// if user hasnt filled anything alert
if (!task) {
  alert("please, fill the form!");
  return;
}

 

const taskEl = document.createElement("div"); //createElement allows me to create DOM notes
// that creates the task form
taskEl.classList.add("task"); //added the class of task
 localStorage.setItem('tasks' , task)
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

    const docRef = doc(db, 'Plans' , task.id.value)

    deleteDoc(docRef)
     .then(() => {
        task.reset()
     })
  })
  






});



