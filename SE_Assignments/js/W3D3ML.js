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
console.log(vendingMachine.vend(1));


const snack1 = new VendingMachine('Doritos', '$1')
console.log(snack1);
const snack2 = new VendingMachine('Funyuns', '$2')
console.log(snack2);
const snack3 = new VendingMachine('Grippos', '$3')
console.log(snack3);



//Correct Version

class Snack {
  constructor (name, price){
    this.name= name;
    this.price= price;
  }
}
class VendingMachine {
  constructor() {
  this.snacks = [] //needs to be an array
}
vend (snackIndex) {
  return this.snacks[snackIndex];
}
}
let vendMachine = new VendingMachine()
let snack1= new Snack('Snickers Bar',1);
let snack2= new Snack('Doritos', .75);
let snack3= new Snack('Pop Tart', .75);
let snacks = [snack1,snack2,snack3]
vendMachine.snacks.push(...snacks)
console.log(vendMachine.vend(0))
