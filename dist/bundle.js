/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// For Firebase JS SDK v7.20.0 and later, measurementId is optional\nconst firebaseConfig = {\n  apiKey: \"AIzaSyB8vPPuayzoZ9mFL7VUGgaBtzd6PxBaSBk\",\n  authDomain: \"personal-todo-project.firebaseapp.com\",\n  projectId: \"personal-todo-project\",\n  storageBucket: \"personal-todo-project.appspot.com\",\n  messagingSenderId: \"472975031744\",\n  appId: \"1:472975031744:web:043e9a3ae3403bfb281c25\",\n  measurementId: \"G-2N0F4E6JZF\"\n};\n\n\n\n\nconst form = document.getElementById(\"new-task-form\");\nconst input = document.getElementById(\"new-task-input\");\nconst listEl = document.querySelector(\"#tasks\");\nconst newTaskSubmit = document.getElementById(\"new-task-submit\");\n\n \n \n\n//the add-task submit form  eventListener to add new tasks\nnewTaskSubmit.addEventListener(\"click\", (e) => {\n  e.preventDefault(); //to prevent onreload submit to page\n   task = input.value; // the input.value are the texts you provide in the input form\n\n  input.value = \"\"\n\n\n\n\n// if user hasnt filled anything alert\nif (!task) {\n  alert(\"please, fill the form!\");\n  return;\n}\n\n \n\nconst taskEl = document.createElement(\"div\"); //createElement allows me to create DOM notes\n// that creates the task form\ntaskEl.classList.add(\"task\"); //added the class of task\n localStorage.setItem('tasks' , task)\nconst taskContentEl = document.createElement(\"div\");//createElement allows me to create DOM notes\ntaskContentEl.classList.add(\"content\");//added the class of content\ntaskContentEl.innerHTML = task; // the textContent should be equall to inputvalue\n\n\ntaskEl.appendChild(taskContentEl); //add the taskContent inside the created div\n \nconst actionEl = document.createElement(\"div\");//createElement allows me to create DOM notes\nactionEl.classList.add(\"btn-actions\");//added the class of btn-actions\n\nconst deleteEl = document.createElement(\"button\"); // Dom element\ndeleteEl.classList.add(\"delete\");//added the class of delete\ndeleteEl.innerHTML = \"Delete\";// textContent should be a string of \"Delete\"\n\nactionEl.appendChild(deleteEl);//add the delete button inside the created div\n\n//add the action btn and the delete btn inside the div taskEl created\ntaskEl.appendChild(actionEl);\ntaskEl.appendChild(deleteEl);\n//add the everything inside the form created\nlistEl.appendChild(taskEl);\n\n\n\n\n\n\n\n\n//the delete button eventlistener\n  deleteEl.addEventListener('click' , (e) =>{\n    if(deleteEl !== taskEl){\n        listEl.removeChild(taskEl)\n    }\n  })\n  \n});\n\n\n\n\n\n\n//# sourceURL=webpack://house_chore-todo_list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;