class Shapes {//Define a class.
  constructor(name, color, size, sides) {//Assign fields.
    this.name = name;//"this" keyword refers to the object it belongs to.
    this.color = color;
    this.size = size;
    this.sides = sides;
  }
}
  class Circle extends Shapes {
    constructor(name, color, size, sides) {
        super(name, color, size, sides);
    }
    circle_area(c){
      var area = Math.floor(Math.PI * Math.pow(c, 2));
      return`${this.name} has a area of ` + area;
    }//In a function "this" refers to a global object.
   total_sides(){
     return `${this.name} has ${this.sides} sides!`;
   }
 }
 const circle1 = new Circle('Larry', 'red','small', 0)
 console.log(circle1);
 const circle2 = new Circle('Curly', 'white','medium', 0)
 console.log(circle2);
 const circle3 = new Circle('Moe', 'blue','large', 0)
 console.log(circle3);

 console.log(circle2.circle_area(5));
 console.log(circle2.total_sides());

 class Rectangle extends Shapes {
   constructor(name, color, size, sides) {
       super(name, color, size, sides);
   }
   rectangle_area(width, height){
     var area = (width * height);
     return`${this.name} has an area of `+ area;
   }
  total_sides(){
    return `${this.name} has ${this.sides} sides!`;
  }
 }
 const rectangle1 = new Rectangle('Cardinal', 'red','small', 4)
 console.log(rectangle1);
 const rectangle2 = new Rectangle('Bluejay', 'blue','medium', 4)
 console.log(rectangle2);
 const rectangle3 = new Rectangle('Gold', 'yellow','large', 4)
 console.log(rectangle3);

 console.log(rectangle3.rectangle_area(5, 5));
 console.log(rectangle3.total_sides());

 class Square extends Shapes {
   constructor(name, color, size, sides) {
       super(name, color, size, sides);
   }
   square_area(r){
     var area = Math.pow(r, 2);
     return`${this.name} has an area of `+ area;
   }
  total_sides(){
    return `${this.name} has ${this.sides} sides!`;
  }
 }
 //Instantiating new objects using "new" keyword.
 const square1 = new Square('Panther', 'black','small', 4)
 console.log(square1);
 const square2 = new Square('Tiger', 'stripes','medium', 4)
 console.log(square2);
 const square3 = new Square('Lion', 'tawny','large', 4)
 console.log(square3);

 console.log(square3.square_area(5,5));//Calls the function.
 console.log(square3.total_sides());
