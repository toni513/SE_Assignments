/*1.Create an Animal class.
 The class will have name, age, color, legs, superPower attributes
 Create two objects of this class - both with a unique superPower
 create three methods for this class - include one method named userSuperPower()
 Create two objects for this class*/
class Animal {
  constructor(name, age, color, legs, superPower, lifeForce) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
    this.superPower = superPower;
    this.lifeForce = lifeForce;
  }
  userSuperPower() {
    return `${this.name}: ${this.superPower} is my secret weapon.`;
  }
  fly() {
    return `${this.name} flies fast!`;
  }
  climb() {
    return `${this.name} climbs high!`;
  }
}

let me = new Animal('ACE', 3, 'Black', 4, 'immortality', 'titanium')
console.log(me.userSuperPower());
let you = new Animal('MAJOR', 4, 'Brown', 4, 'invisibility', 'gold')
console.log(you.fly());
let him = new Animal('TANK', 4, 'Blue', 1, 'gullibility', 'pewter')
console.log(him.climb());


/*2.Create a class name User
 This class with have firstName, lastName, department attributes
 a method name changeDepartment()
 Create three instances of this class
 Change department for two of the instances
 Create three objects for this class*/

class User {
 constructor(firstName, lastName, department) {
   this.firstName = firstName;
   this.lastName = lastName;
   this.department = department;
   this
}
   changeDepartment(x) {
     return `${this.department} is the new department!`;
   }
}

 let user1 = new User('Code','Man', 'IT')
 console.log(user1);
 let user2 = new User('Slim', 'Man', 'Food Service')
 console.log(user2.changeDepartment('QC'));
 let user3 = new User('Old', 'Man', 'Retirement')
 console.log(user3.changeDepartment('The Pasture'));
