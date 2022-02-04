// const list = document.querySelector('.list');
// const button = document.querySelector('button');
// const input = document.querySelector('#favchap');

// function doSomething() {
//     const listItem = input.value;
//     input.value = '';
//     const li = document.createElement('li');
//     li.innerHTML = `${listItem} <button class="delete">❌</button>`;
//     document.querySelector('.list').appendChild(li);
//     libutton.addEventListener('click', function(e) {
//         list.removeChild(li);
//     })
// }

const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.onclick = function () {
  let myItem = input.value;
  input.value = "";

  const li = document.createElement("li");
  const ltext = document.createElement("span");
  const lbutton = document.createElement("button");

  li.appendChild(ltext);
  ltext.textContent = myItem;
  li.appendChild(lbutton);
  lbutton.textContent = "❌";
  list.appendChild(li);

  lbutton.onclick = function (e) {
    list.removeChild(li);
  };

  input.focus();
};
