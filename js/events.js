console.log('events');

const container = document.querySelector('.container');

//  Solution 1 (simple , quick and dirty )

/*

      window.addEventListener('keydown', (e) => {
        container.innerHTML = `
        <div class="select">
            <h2>e.key</h2>
            <strong>${e.key === ' ' ? 'Space' : e.key }</strong>
        </div>

          <div class="select">
            <h2>e.keyCode</h2>
            <strong>${e.keyCode}</strong>
          </div>

          <div class="select">
            <h2>e.code</h2>
            <strong>${e.code}</strong>
          </div>
        `;
      });

*/

//  Solution 2 (professional and clean)

function showKeyCode(e) {
  container.innerHTML =''
  console.clear();

  // const keysObject = {
  //   'e.key': e.key === ' ' ? 'Space' : e.key ,
  //   'e.keyCode': e.keyCode,
  //   'e.code': e.code,
  // };

  const keysObject = {
    key: e.key === ' ' ? 'Space' : e.key ,
    keyCode: e.keyCode,
    code: e.code,
  };

  for (let item in keysObject) {
   
    const div = document.createElement('div')
    div.classList.add('select')

    const strong = document.createElement('strong')
    const title = document.createElement('h3')
    title.textContent = `${item}`
    const keyValue = document.createTextNode(keysObject[item])
  
    strong.appendChild(keyValue)
    div.appendChild(title)
    div.appendChild(strong)

    container.appendChild(div)
   
    console.log(keysObject[item]);
  }
};

window.addEventListener('keydown', showKeyCode);
