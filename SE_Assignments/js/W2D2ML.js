//While loop

//1. Using a while loop, print out all prime numbers between 0 - 20.
for (var counter = 1 ; counter <= 20; counter++) {

    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
                console.log(counter);
    }
}

//2. Use a while loop to add up the numbers 1 to 20 into one variable. Print out the sum at the end
for (var counter = 1 ; counter <= 20; counter++) {
     var notPrime = false;
     let sum = 0;
     sum +=i;
     i++;
    for (var i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
      let sum = 0, i = 1;
}
        console.log(sum);
    }
}

//3. Use a while loop to print out the even number from 1 to 20.
for (var counter = 1 ; counter <= 20; counter++) {

    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
        if (counter%2===0 && i!==counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
                console.log(counter);
    }
}
