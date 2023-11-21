const addBtn = document.querySelector(".add-button");

import { initializeApp } from "firebase/app";

import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzI6DW9qx6xHLHgDEbh3c5esIfqGZU45M",
  authDomain: "myapp-17d11.firebaseapp.com",
  projectId: "myapp-17d11",
  storageBucket: "myapp-17d11.appspot.com",
  messagingSenderId: "230722705247",
  appId: "1:230722705247:web:f02846f08e6409b5efc8ea",
  measurementId: "G-M1ZFJTFWNP",
};

initializeApp(firebaseConfig);
const db = getFirestore();
const colRef = collection(db, "todo");

console.log(colRef);

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let text = document.querySelector(".input-todo-value").value;

  if (!text) {
    alert("Empty");
    return;
  }
  document.querySelector(".input-todo-value").value = "";
  addDoc(colRef, {
    text,
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
    
    
        <div class="wrapper">
    <ul>
            <li>
            ${item.text}
            </li>
        </ul>
        </div>
         `;
  });

  document.querySelector(".wrapper").innerHTML = itemsHtml;


}

getItems();



  document.querySelector(".delete").addEventListener("click", (e) => {
    e.preventDefault();
    const list = document.querySelector(".wrapper")
    list.removeChild(list.firstElementChild)
  
  });

