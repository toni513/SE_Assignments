/*OOP - Classes: Model a vending machine

When we wanted to access snacks within our object we had to put the name of the object in it to access the snacks

a vending machine is an object
it has an array of snacks (make 3 snacks)
snacks are objects that have a name and a price
a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
Be able to call vendingMachine.vend() with a valid integer to return a snack*/

class Snacks {
 constructor(name, price) {
   this.name = name;
   this.price = price;
 }


let myarray = ['Doritos','Funyuns','Grippos'];
let index = myarray.findIndex([]);
return index;
}
}

const snack1 = new Snacks('Doritos', '1 Dollar')
console.log(snack1);
const snack2 = new Snacks('Funyuns', '2 Dollars')
console.log(snack2);
const snack3 = new Snacks('Grippos', '3 Dollars')
console.log(snack3);
myarray.findIndex([]);
console.log(index[2]);
