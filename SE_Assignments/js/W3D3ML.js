/*OOP - Classes: Model a vending machine

When we wanted to access snacks within our object we had to put the name of the object in it to access the snacks

a vending machine is an object
it has an array of snacks (make 3 snacks)
snacks are objects that have a name and a price
a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
Be able to call vendingMachine.vend() with a valid integer to return a snack*/

class VendingMachine {
 constructor(name, price) {
   this.name = name;
   this.price = price;
 }
vend(x){
  return `Snack: ${this.name[x]}` + ` are $${this.price[x]}.`;
 }
}
let vendingMachine = new VendingMachine(
 ['Doritos','Funyuns','Grippos'], [1, 2, 3]);
console.log(vendingMachine.vend(0));


const snack1 = new VendingMachine('Doritos', '$1')
console.log(snack1);
const snack2 = new VendingMachine('Funyuns', '$2')
console.log(snack2);
const snack3 = new VendingMachine('Grippos', '$3')
console.log(snack3);
