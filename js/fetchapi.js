console.log('fetch api');
//-----------------PROJECT 1 ------------------
//--------------- RANDOM USER GENERATOR ------

const generatorBtn = document.querySelector('.user-button-generator');
// const loadingEl = document.querySelector('.spinner');

function fetchUser() {
  // showSpinner();
  fetch('https://randomuser.me/api/')
    .then((res) => res.json())
    .then((data) => {
      // hideSpinner();
      const user = data.results[0];
      displayUser(user);
    });
}

function displayUser(user) {
  if (user.gender === 'male') {
    document.querySelector('.random-user-generator').style.backgroundColor =
      'steelblue';
  } else {
    document.querySelector('.random-user-generator').style.backgroundColor =
      'pink';
  }
  document.querySelector('.random-user-generator').innerHTML = `
  <div class="container" >
   <div class="user-container">
          <div class="user-title">
            <h1>Random User Generator</h1>
             <button class="user-button-generator">Generate User</button>
            <div class="spinner"></div>
          </div>
          <div class="user-card">
            <div class="user-image">
              <img src="${user.picture.large}">
            </div>


            <div class="user-details">
              <p><b>Name:</b> ${user.name.first} ${user.name.last}</p>
              <p><b>Email:</b>${user.email}</p>
              <p><b>Phone:</b>${user.phone}</p>
              <p><b>Location:</b> ${user.location.city}</p>
              <p><b>Age:</b> ${user.dob.age}</p>
            </div>


          </div>
         </div>
         </div>
  `;
}
// function showSpinner() {
//   loadingEl.style.display = 'block';
// }

// function hideSpinner() {
//   loadingEl.style.display = 'none';
// }

//  generatorBtn.addEventListener('click', fetchUser);

fetchUser();

// --------NOTE---------------
//  For some reasons eventListener and spinner not working

//-----------------PROJECT 2 ------------------
// ----------------TYPICODE TODO --------------

const form = document.querySelector('#todo-form');
const apiURL = 'https://jsonplaceholder.typicode.com/todos';

function getTodos() {
  fetch(`${apiURL}/?_limit=7`)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((todo) => {
        addTodoToDOM(todo);
      });
    });
}

function addTodoToDOM(todo) {
  const div = document.createElement('div');
  div.classList.add('todo');
  div.appendChild(document.createTextNode(todo.title));
  document.getElementById('todo-list').appendChild(div);
  div.setAttribute('data-id', todo.id);
  if (todo.completed) {
    div.classList.add('done');
  }
}

function createTodo(e) {
  e.preventDefault();

  console.log(e.target.firstElementChild.value);

  const newTodo = {
    title: e.target.firstElementChild.value,
    completed: false,
  };

  fetch(apiURL, {
    method: 'POST',
    body: JSON.stringify(newTodo),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => addTodoToDOM(data));
}

function toggleTodo(e) {
  if (e.target.classList.contains('todo')) {
    e.target.classList.toggle('done');
    updateTodo(e.target.dataset.id, e.target.classList.contains('done'));
  }
  
}

function updateTodo(id, completed) {
  fetch(`${apiURL}/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ completed }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function deleteTodo(e) {
  if (e.target.classList.contains('todo')) {
    const id = e.target.dataset.id
    fetch(`${apiURL}/${id}`, {
      method:'DELETE'
    })
  }
}

function init() {
  document.addEventListener('DOMContentLoaded', getTodos);
  form.addEventListener('submit', createTodo);
  document.querySelector('#todo-list').addEventListener('click', toggleTodo);
  document.querySelector('#todo-list').addEventListener('dblclick', deleteTodo);
}

init();
