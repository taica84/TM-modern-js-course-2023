console.log('Shopping list');

//-------------get variables--------

const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const addBtn = itemForm.querySelector('.btn');
const clearBtn = document.querySelector('.btn-clear');
const filter = document.querySelector('.filter');
let isEditMode = false;

//--------------  display saved items from local storage

function displayItems() {
  let todoStorage = getItemFromStorage();

  todoStorage.forEach((item) => addItemToDOM(item));
}

//--------------------  add items to the list ----------
function addItemOnSubmit(e) {
  e.preventDefault();

  let newItem = itemInput.value;

  if (newItem === '') {
    alert('Please add an item!');
    return;
  }

  if (isEditMode) {
    const itemToEdit = itemList.querySelector('.edit-mode');

    removeItemFromLocalStorage(itemToEdit.textContent);

    itemToEdit.remove();
    isEditMode = false;
  } else {
    if (checkIfItemsExists(newItem)) {
      alert('Item already exist');
      return;
    }
  }

  addItemToDOM(newItem);
  saveToStorage(newItem);

  itemInput.value = '';
}

//------TEMPLATE ------------------

//  <li>
//    Orange Juice
//    <button class="remove-item btn-link text-red">
//      <i class="fa-solid fa-xmark"></i>
//    </button>
//  </li>;

//--------------------Add item to DOM --------

function addItemToDOM(item) {
  let li = document.createElement('li');
  li.appendChild(document.createTextNode(item));
  let btnEl = createButton('remove-item btn-link text-red');
  li.appendChild(btnEl);

  //Add li to the DOM
  itemList.appendChild(li);

  //Reset UI
  resetUI();
}

//---------- create elements inside 'li'(button and icon) ----

function createButton(classes) {
  let btnEl = document.createElement('button');
  btnEl.className = classes;
  let icon = createIcon('fa-solid fa-xmark');
  btnEl.appendChild(icon);
  return btnEl;
}

function createIcon(classes) {
  let icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

//---------------------Save to  local storage -----------

function saveToStorage(item) {
  let todoStorage = getItemFromStorage();

  todoStorage.push(item);

  localStorage.setItem('todo', JSON.stringify(todoStorage));
}

//------------------get item from local storage

function getItemFromStorage() {
  let todoStorage;

  if (localStorage.getItem('todo') === null) {
    todoStorage = [];
  } else {
    todoStorage = JSON.parse(localStorage.getItem('todo'));
  }

  return todoStorage;
}

//--------------remove from local storage------
function removeItemFromLocalStorage(item) {
  let todoStorage = getItemFromStorage();

  todoStorage = todoStorage.filter((i) => i !== item);

  localStorage.setItem('todo', JSON.stringify(todoStorage));
}

//---------------------filter items -----------
function filterItems(e) {
  const items = itemList.querySelectorAll('li');
  const text = e.target.value.toLowerCase();

  items.forEach((item) => {
    const filterText = item.firstChild.textContent.toLowerCase();

    if (filterText.indexOf(text) != -1) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}
//------------  remove item --------

function removeItem(e) {
  if (e.target.parentElement.classList.contains('remove-item')) {
    if (confirm('Are you sure???')) {
      e.target.parentElement.parentElement.remove();
      removeItemFromLocalStorage(
        e.target.parentElement.parentElement.textContent
      );
    }
  } else if (e.target.textContent) {
    setItemToEdit(e.target);
  }

  if (itemList.querySelectorAll('li').length === 0) {
    resetUI();
  }
}

//----------------set item to edit -------------

function setItemToEdit(item) {
  isEditMode = true;
  const items = itemList.querySelectorAll('li');
  items.forEach((i) => i.classList.remove('edit-mode'));
  item.classList.add('edit-mode');
  addBtn.style.backgroundColor = 'green';
  addBtn.innerHTML = ` <i class="fa-solid fa-pen"></i> Update Item `;
  itemInput.value = item.textContent;
}

// ------------  check if the items exists-------

function checkIfItemsExists(item) {
  return getItemFromStorage().includes(item);
}

//-----------------  clear all items from list

function clearItems() {
  // ----solution 1 (professional)-----

  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }

  //clear local storage
  localStorage.removeItem('todo');
  //reset UI
  resetUI();

  //----solution 2 (no professional)---

  // itemList.innerHTML = '';
}

//-------resetUi (when is not any items in the list , hide filter and clear button) ------------

function resetUI() {
  const items = itemList.querySelectorAll('li');
  if (items.length === 0) {
    clearBtn.classList.add('hide');
    filter.classList.add('hide');
  } else {
    clearBtn.classList.remove('hide');
    filter.classList.remove('hide');
  }
  addBtn.innerHTML = `<i class="fa-solid fa-plus"></i> Add Item`;
  addBtn.style.backgroundColor = 'black';
  isEditMode = false;
}

//---------------eventListeners -------------

function init() {
  itemForm.addEventListener('submit', addItemOnSubmit);
  itemList.addEventListener('click', removeItem);
  clearBtn.addEventListener('click', clearItems);
  filter.addEventListener('input', filterItems);
  document.addEventListener('DOMContentLoaded', displayItems);

  resetUI();
}

init();
