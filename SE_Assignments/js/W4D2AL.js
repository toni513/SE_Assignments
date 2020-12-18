/*Promises
Complete JavaScript Promises on Codecademy
JAVASCRIPT PROMISES: https://www.codecademy.com/learn/introduction-to-javascript*/
//1. Introduction

An asynchronous operation is one that allows the computer to “move on” to other
tasks while waiting for the asynchronous operation to complete. Asynchronous programming
means that time-consuming operations don’t have to bring everything else in our programs to a halt.
Web development makes use of asynchronous operations. Operations like making a network request or
querying a database can be time-consuming, but JavaScript allows us to execute other tasks
while awaiting their completion.
//2.What is a Promise?

Promises are objects that represent the eventual outcome of an asynchronous operation.
A Promise object can be in one of three states:
Pending: The initial state— the operation has not completed yet.
Fulfilled: The operation has completed successfully and the promise now has a resolved value.
For example, a request’s promise might resolve with a JSON object as its value.
Rejected: The operation has failed and the promise has a reason for the failure.
This reason is usually an Error of some kind.

//3. Constructing a Promise Object
const executorFunction = (resolve, reject) =>
{ };
const myFirstPromise = new Promise(executorFunction);

To create a new Promise object, we use the new keyword and the Promise constructor method:
//myFirstPromise is constructed using new Promise() which is the Promise constructor method.
const executorFunction = (resolve, reject) => {
  if (someCondition) {//executorFunction() is passed to the constructor and has two functions as parameters: resolve and reject.
      resolve('I resolved!');//If someCondition evaluates to true, we invoke resolve() with the string 'I resolved!'
  } else {
      reject('I rejected!');//If not, we invoke reject() with the string 'I rejected!'
  }
}
//We declare a variable myFirstPromise
const myFirstPromise = new Promise(executorFunction);

app.js

const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};
const myExecutor = (resolve, reject) => {
  if (inventory.sunglasses > 0) {
      resolve('Sunglasses order processed.');
  } else {
    reject('That item is sold out.');
  }
};
const orderSunglasses = () => {
  return new Promise(myExecutor);
};

const orderPromise = orderSunglasses();

console.log(orderPromise);
