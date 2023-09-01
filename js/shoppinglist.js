console.log('Shopping list');

//-------------get variables--------

const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

//--------------------  add items to the list ----------
function getForm(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  if (newItem === '') {
    alert('Please add an item');
    return;
  }

  const li = document.createElement('li');
  li.appendChild(document.createTextNode(newItem));

  const button = createButton('remove-item btn-link text-red');
  li.appendChild(button);

  itemList.appendChild(li)

  console.log(li);
}

//---------- create elements inside 'li' -----

function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;

  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
}

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;

  return icon;
}

//   <li>
//   Apples
//   <button class="remove-item btn-link text-red">
//     <i class="fa-solid fa-xmark"></i>
//   </button>
// </li>

//---------------eventListeners -------------

itemForm.addEventListener('submit', getForm);
