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
  userSuperPower(power) {
    this.superPower = power;
  }
  getLifeForce(force) {
    this.lifeForce = force;
  }
  showMyColor(mycolor) {
    this.color = mycolor;
  }
}

const me = new Animal('ACE', 3, 'Black', 4, 'Immortality', 'titanium')
console.log(me);
me.userSuperPower('Super Strength');
console.log(me);
me.getLifeForce('Jelly')
console.log(me);
me.showMyColor('Orange');
console.log(me);
const you = new Animal('MAJOR', 4, 'Brown', 4, 'Invisibility', 'gold')
console.log(you);



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
}
   changeDepartment(downsizing) {
     this.department = downsizing;
   }
}

 const user1 = new User('Code','Man', 'IT')
 console.log(user1);
 const user2 = new User('Slim', 'Man', 'Food Service')
 console.log(user2);
 user2.changeDepartment('QC');
 console.log(user2);
 const user3 = new User('Old', 'Man', 'Retirement')
 console.log(user3);
 user3.changeDepartment('The Pasture');
 console.log(user3);
