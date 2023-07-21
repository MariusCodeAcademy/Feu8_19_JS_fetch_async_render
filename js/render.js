'use strict';
console.log('render.js file was loaded');

// taikomes
const cardEl = document.getElementById('cards');

const urlUsers = 'https://jsonplaceholder.typicode.com/users';
// parsisiusti userius is users
fetch(urlUsers)
  .then((response) => response.json())
  .then((userDataArr) => {
    console.log('userDataArr ===', userDataArr);
    render(userDataArr);
  })
  .catch((error) => {
    console.warn(error);
  });

// sugeneruoti korteles su render()
// render() - priima argumentu masyva is kurio generuoja korteles

// makeOneCard() - priimtu argumentu viena user objekta ir grazinu sukurta html elementa

/**
 *
 * @param {Array} arr
 */
function render(arr) {
  const htmlElemnetsArr = arr.map((uObj) => {
    // TODO: grazinti ne stringa bet html elementa sukurta su createElement
    return `
    <article class="card">
      <h3>Name: ${uObj.name}</h3>
      <p>Email: ${uObj.email}</p>
      <a href="#">Read more</a>
    </article>
    `;
  });
  // turim sujungti masyva i viena stringa
  cardEl.innerHTML = htmlElemnetsArr.join('');
  console.log('htmlElemnetsArr ===', htmlElemnetsArr);
}

function makeOneCard(userObj) {}
