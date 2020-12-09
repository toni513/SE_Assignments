//For loops


//Question 1 - Loop for given output:
for(var i=2; i<=10; i+=2) {
  console.log(i);
}
/*For loop with 3 statements. Statement 1 sets a variable before the
the loop starts (var i = 2). Statement 2 defines the condition for the
loop to run (i must be less than and equal to 10). Statement 3 increases
a value(i+=2) each time the code block in the loop is excuted. Log will
print 2,4,6,8,10.*/
for(var i=1; i<=9; i+=2) {
  console.log(i);
}
/*For loop with 3 statements. Statement 1 sets a variable before the
the loop starts (var i = 1). Statement 2 defines the condition for the
loop to run (i must be less than and equal to 9). Statement 3 increases
a value(i+=2) each time the code block in the loop is excuted. Log will
print 1,3,6,9.*/

//Question 2 - Loop that iterates 1-10.
for (var x = 0; x <= 10; x++) {
  if (x === 0) {  //1st condition.
    console.log(x + " is even");
  } else if (x % 2 === 0) { //2nd condition
    console.log(x + " is even");
  }
}


//Question 3 - Loop that iterates 1-20.
//Print prime, odd, & even.
for (let x = 1; x < 20; x++) {
  if (x > 1) {
    if (x == 2 || x == 3) {
      console.log(x);
    } else if (x % 2 && x % 3) {
      console.log(x);
    }
  }
}
