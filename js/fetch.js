'use strict';
console.log('fetch.js file was loaded');

// fetch(url) - sukuriam get uzklausa i nurodyta url

fetch('data.txt')
  .then((response) => {
    // blue = 'green';
    console.log('response ===', response);
    if (response.ok === false) {
      throw new Error(`status: ${response.status} - ${response.statusText} `);
    }
    return response.text();
  })
  .then((dataInJs) => {
    console.log('dataInJs ===', dataInJs);
  })
  .catch((errorObj) => {
    console.warn(errorObj);
  });

// parsiusti duomenis is https://jsonplaceholder.typicode.com/posts

const url = 'https://jsonplaceholder.typicode.com/posts';
fetch(url)
  .then((response) => {
    console.log('response posts ===', response);
    return response.json();
  })
  .then((postArrInJs) => {
    console.log(postArrInJs.slice(0, 10));
  })
  .catch((error) => {
    console.warn(error);
  });

// parsiusti ir atspausdinti userius is https://jsonplaceholder.typicode.com/users
// atspausdinti pirmo userio name htmle
