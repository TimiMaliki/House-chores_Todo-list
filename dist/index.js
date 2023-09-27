import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot, addDoc , doc ,deleteDoc,getDocs} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCN-1bgHFKVkH4XxY_IEB_wuxbYXdtUJEE",
  authDomain: "todo-app-22992.firebaseapp.com",
  projectId: "todo-app-22992",
  storageBucket: "todo-app-22992.appspot.com",
  messagingSenderId: "509942172752",
  appId: "1:509942172752:web:e8e7c5dc30e0d66dd0d555",
};

initializeApp(firebaseConfig);
const db = getFirestore();
const colRef = collection(db, "todo-lists");

window.addEventListener('load', () => {
  
});
const docsSnap = await getDocs(colRef);

docsSnap.forEach(doc => {
  console.log(doc.data());
})


onSnapshot(colRef, (snapshot) => {
 
      snapshot.docs.forEach((doc) => {
              console.log(doc.data())
      });
      
  })

const input = document.querySelector(".input-todo-value");
const addBtn = document.querySelector(".add-button");
const todoWrapper = document.querySelector(".wrapper");






let task;
//The Add button
addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  task = input.value;
  input.value = "";
  if (!task) {
    alert("Empty");

    return;
  }

  createATodo();
  addDocsToFireBase();
});

//Addin an object/Data to the firebase store

function addDocsToFireBase() {
  addDoc(colRef,{
    text:task
  })
}

//Create a Task In The UI
function createATodo() {
  const createADivElement = document.createElement("div");
  createADivElement.classList.add("todo");

  const contentEl = document.createElement("div");
  contentEl.classList.add("content");
  contentEl.innerHTML = task;

  createADivElement.appendChild(contentEl);

  const deleteEl = document.createElement("div");
  deleteEl.classList.add("deleteWrapper");

  const btnDelete = document.createElement("button");
  btnDelete.classList.add("delete-btn");
  btnDelete.innerHTML = "Delete";

  deleteEl.appendChild(btnDelete);

  createADivElement.appendChild(deleteEl);
  createADivElement.appendChild(btnDelete);
  todoWrapper.appendChild(createADivElement);

  deleteItem(btnDelete,createADivElement , contentEl , deleteEl)
}

// Delete the task on the UI

function deleteItem(btnDelete,createADivElement , contentEl,deleteEl){

  btnDelete.addEventListener("click", (e) => {
    e.preventDefault();
    createADivElement.remove(contentEl);
    createADivElement.remove(deleteEl);

    const docRef= doc(db, "T0DO-listItems" ,task.id.value)

    deleteDoc(docRef)
  
  });
}
