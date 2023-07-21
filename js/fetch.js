'use strict';
console.log('fetch.js file was loaded');

// fetch(url) - sukuriam get uzklausa i nurodyta url

fetch('data.txt')
  .then((response) => {
    // blue = 'green';
    // console.log('response ===', response);
    if (response.ok === false) {
      throw new Error(`status: ${response.status} - ${response.statusText} `);
    }
    return response.text();
  })
  .then((dataInJs) => {
    // console.log('dataInJs ===', dataInJs);
  })
  .catch((errorObj) => {
    console.warn(errorObj);
  });

// parsiusti duomenis is https://jsonplaceholder.typicode.com/posts

const url = 'https://jsonplaceholder.typicode.com/posts';
fetch(url)
  .then((response) => {
    // console.log('response posts ===', response);
    return response.json();
  })
  .then((postArrInJs) => {
    // console.log(postArrInJs.slice(0, 10));
  })
  .catch((error) => {
    console.warn(error);
  });

// parsiusti ir atspausdinti userius is https://jsonplaceholder.typicode.com/users
// atspausdinti pirmo userio name htmle

const urlUsers = 'https://jsonplaceholder.typicode.com/users';

let usenName = 'not set';
fetch(urlUsers)
  .then((response) => response.json())
  .then((usersInJs) => {
    // cia mes jau gavo userius
    console.log('usersInJs ===', usersInJs);
    // pirmo userio vardas
    console.log('usersInJs[0].name ===', usersInJs[0].name);
    usenName = usersInJs[0].name;
    printValueToHtml(usenName);
  })
  .catch((error) => {
    console.warn(error);
  });

function printValueToHtml(valueString) {
  const pEl = document.createElement('p');
  pEl.textContent = valueString;
  document.body.append(pEl);
}
printValueToHtml('Ar veikia spausdinimas');
printValueToHtml(usenName);
