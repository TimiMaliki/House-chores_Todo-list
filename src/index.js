const addBtn = document.querySelector(".add-button");


import { initializeApp } from "firebase/app";

import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
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
const colRef = collection(db, "lists");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let text = document.querySelector(".input-todo-value").value;
  if (!text) {
    alert("Empty");

    return;
  }

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
     
     <div class="wrapper ">
        ${item.text}
       
    </div>
     `;
  });

  document.querySelector(".wrapper").innerHTML = itemsHtml;
}

getItems();
