const addBtn = document.querySelector(".add-btn");
const deleteButton = document.querySelector(".delete")
import { initializeApp } from "firebase/app";

import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-XoDZYwg7jxz4E3XKIa3pAoVcdD4cg2g",
  authDomain: "first-a96df.firebaseapp.com",
  projectId: "first-a96df",
  storageBucket: "first-a96df.appspot.com",
  messagingSenderId: "855755296158",
  appId: "1:855755296158:web:8373ab94f30843000b5a8f",
  measurementId: "G-6K674LRDDR",
};

initializeApp(firebaseConfig);

const db = getFirestore();
const colRef = collection(db, "task-todo");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let text = document.querySelector(".input-todo-value").value;
  if (!text) {
    alert("Empty");

    return;
  }
  document.querySelector(".input-todo-value").value = "";
  addDoc(colRef, {
    text: text,
  });
});

function getItems() {
  onSnapshot(colRef, (snapshot) => {
    let tasks = [];

    snapshot.docs.forEach((doc) => {
      tasks.push({ ...doc.data(), id: doc.id });
    });
    generateItems(tasks);
  });
}

function generateItems(tasks) {
  let itemsHtml = "";

  tasks.forEach((item) => {
    console.log(item);

    itemsHtml += `

   
    <div class="wrapper flex-input">
   
       <div class="text" id="id">${item.text}</div>
       ${deleteButton('delete')}
    </div>
 
     `;
  });

  document.querySelector(".wrapper").innerHTML = itemsHtml;
}

getItems();


deleteButton.addEventListener("click", (e)=>{
  e.preventDefault();

  console.log('hello')

  let id = e.target.parentElement

  console.log(id)


})





// function deleteButton() {

//   document.querySelector(".delete").addEventListener("click", (e) => {
//     e.preventDefault();

//     let id = e.target.parentElement

//   });
  
// }


// tasks.forEach((item) => {

//   const deleteRef = doc(db, "task-todo", item.id);

//   deleteDoc(deleteRef);
// });
