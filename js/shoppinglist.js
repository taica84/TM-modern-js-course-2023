console.log('Shopping list');

//-------------get variables--------

const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

const clearBtn = document.querySelector('.btn-clear');
const filter = document.querySelector('.filter');

//--------------  display saved items from local storege

//--------------------  add items to the list ----------
function addItem(e) {
  e.preventDefault();
  
  let newItem = itemInput.value;

  if (newItem === '') {
    alert('Please add an item!')
    return
  }

  addItemToDOM(newItem);
  
 itemInput.value = '';

}

//------TEMPLATE ------------------

  //  <li>
  //    Orange Juice
  //    <button class="remove-item btn-link text-red">
  //      <i class="fa-solid fa-xmark"></i>
  //    </button>
  //  </li>;

//--------------------Add item to DOM

function addItemToDOM(item) {

  let li = document.createElement('li')
  li.appendChild(document.createTextNode(item))
  let btnEl = createButton('remove-item btn-link text-red');
  li.appendChild(btnEl)

  //Add li to the DOM
  itemList.appendChild(li)

  //Reset UI
  resetUI()

  console.log(itemList);
}

//---------- create elements inside 'li'(button and icon) ----

function createButton(classes) {
  let btnEl = document.createElement('button')
  btnEl.className = classes;
  let icon = createIcon('fa-solid fa-xmark');
  btnEl.appendChild(icon)
  return btnEl
}

function createIcon(classes) {
  let icon = document.createElement('i')
  icon.className = classes;
  return icon
}

//---------------------filter items -----------

//------------------  remove item --------

function removeItem(e) {
  if (e.target.parentElement.classList.contains('remove-item')) {
    alert('Are you sure?')
    e.target.parentElement.parentElement.remove()
      resetUI();

  }
}

//-----------------  clear all items from list

function clearItems() {
  // ----solution 1 (professional)-----

   while (itemList.firstChild) {
     itemList.removeChild(itemList.firstChild)
  }
  
  resetUI()

  //----solution 2 (no professional)---

  // itemList.innerHTML = '';
}

//-------resetUi (when is not any items in the list , hide filter and clear button) ------------

function resetUI() {
  const items = itemList.querySelectorAll('li');
  if (items.length === 0) {
    clearBtn.classList.add('hide')
    filter.classList.add('hide');
  } else {
      clearBtn.classList.remove('hide');
      filter.classList.remove('hide');
  }
}

//---------------eventListeners -------------

function init() {
  itemForm.addEventListener('submit', addItem);
   itemList.addEventListener('click', removeItem);
   clearBtn.addEventListener('click', clearItems);
  // filter.addEventListener('input', filterItems);
  // document.addEventListener('DOMContentLoaded', displayItems);

  resetUI();
}

init();
