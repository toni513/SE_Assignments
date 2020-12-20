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

//The Node setTimeout() Function
Moving forward, we’ll be simulating this by providing you with functions that return promises
which settle after some time. To accomplish this, we’ll be using setTimeout(). setTimeout() is
a Node API (a comparable API is provided by web browsers) that uses callback functions to
schedule tasks to be performed after a delay. setTimeout() has two parameters: a callback function
and a delay in milliseconds.
const usingSTO = () => {
  console.log("This line of code will log to the console last.");
};

setTimeout(usingSTO, 100);

//Consuming PROMISES
.then() is a higher-order function— it takes two callback functions as arguments. We refer to
these callbacks as handlers. When the promise settles, the appropriate handler will be invoked
with that settled value.
We can invoke .then() with one, both, or neither handler! This allows for flexibility, but it can
also make for tricky debugging. If the appropriate handler is not provided, instead of throwing an
error, .then() will just return a promise with the same settled value as the promise it was called on.
One important feature of .then() is that it always returns a promise.

//The onFulfilled and onRejected Functions
To handle a “successful” promise, or a promise that resolved, we invoke .then() on the promise,
passing in a success handler callback function:

const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectReason) => {
  console.log(rejectReason);
};

checkInventory(order)
  .then(handleSuccess, handleFailure);


//Using catch() with Promises: cleaner code!
Instead of passing both handlers into one .then(), we can chain a second .then() with a
failure handler to a first .then() with a success handler and both cases will be handled.

const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectReason) => {
  console.log(rejectReason);
};

// Write your code below:
checkInventory(order)
	.then(handleSuccess)
	.catch(handleFailure);


//Chaining Multiple PROMISES
One common pattern we’ll see with asynchronous programming is multiple operations
which depend on each other to execute or that must be executed in a certain order.
This process of chaining promises together is called composition.
Promises are designed with composition in mind!

const {checkInventory, processPayment, shipOrder} = require('./library.js');

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};

checkInventory(order)
.then((resolvedValueArray) => {
  // Write the correct return statement here:
 return processPayment(resolvedValueArray);
})
.then((resolvedValueArray) => {
  // Write the correct return statement here:
  return shipOrder(resolvedValueArray);
})
.then((successMessage) => {
  console.log(successMessage);
})
.catch((errorMessage) => {
  console.log(errorMessage);
});


//Avoiding Common Mistakes
Mistake 1: Nesting promises instead of chaining them.
returnsFirstPromise()
.then((firstResolveVal) => {
  return returnsSecondValue(firstResolveVal)
    .then((secondResolveVal) => {
      console.log(secondResolveVal);
    })
})
Let’s break down what’s happening in the above code:
We invoke returnsFirstPromise() which returns a promise.
We invoke .then() with a success handler.
Inside the success handler, we invoke returnsSecondValue() with firstResolveVal which will return a new promise.
We invoke a second .then() to handle the logic for the second promise settling all inside the first then()!
Inside that second .then(), we have a success handler which will log the second promise’s resolved value to the console.
Instead of having a clean chain of promises, we’ve nested the logic for one inside the logic of the other.
Imagine if we were handling five or ten promises!

Mistake 2: Forgetting to return a promise.
returnsFirstPromise()
.then((firstResolveVal) => {
  returnsSecondValue(firstResolveVal)
})
.then((someVal) => {
  console.log(someVal);
})
Let’s break down what’s happening in the example:

We invoke returnsFirstPromise() which returns a promise.
We invoke .then() with a success handler.
Inside the success handler, we create our second promise, but we forget to return it!
We invoke a second .then(). It’s supposed to handle the logic for the second promise, but since we didn’t return,
this .then() is invoked on a promise with the same settled value as the original promise!
Since forgetting to return our promise won’t throw an error, this can be a really tricky thing to debug!


//Using Promise.all()
What if we’re dealing with multiple promises, but we don’t care about the order?
To maximize efficiency we should use concurrency, multiple asynchronous operations happening together.
With promises, we can do this with the function Promise.all().

Promise.all() accepts an array of promises as its argument and returns a single promise. That single
promise will settle in one of two ways:
If every promise in the argument array resolves, the single promise returned from Promise.all() will
resolve with an array containing the resolve value from each promise in the argument array.
If any promise from the argument array rejects, the single promise returned from Promise.all() will
immediately reject with the reason that promise rejected. This behavior is sometimes referred to as failing fast.
const {checkAvailability} = require('./library.js');

const onFulfill = (itemsArray) => {
  console.log(`Items checked: ${itemsArray}`);
  console.log(`Every item was available from the distributor. Placing order now.`);
};

const onReject = (rejectionReason) => {
	console.log(rejectionReason);
};

// Write your code below:

const checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.');
const checkPants = checkAvailability('pants', 'Favorite Supply Co.');
const  checkBags = checkAvailability('bags', 'Favorite Supply Co.');

Promise.all([checkSunglasses, checkPants, checkBags])
  .then(onFulfill)
  .catch(onReject);
