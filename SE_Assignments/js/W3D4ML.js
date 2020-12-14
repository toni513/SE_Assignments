/*OOP - Inheritance

1.Create a class called Fish
Define a method Swim( )
2.Create a class Nemo that inherits from Fish
Define an attribute color
3.Create a Nemo object. Can it swim?
4.Find the difference between abstract class and an interface
5.Which of the two can have implementation of a method in the class?*/

class Fish{
 constructor(name){
   this.name = name;
 }
  Swim(){
   return `${this.name} can swim`;
  }
}
class Nemo extends Fish { //Assign child class to parent class
  constructor(name, color) {
    super(name);
    this.color = color;
  }
}
let fakeNemo = new Nemo('Nemo','blue-striped!');
console.log(fakeNemo.Swim() + ' and is ' + fakeNemo.color);
