//5,3,8,4,6
var arr = [5, 3, 8, 4, 6]; //Array variables declared and assigned.
function bubbleSort(arr) {
  var swapped; //Swapped varible is declared and undefined.
  do {  // Do/while loop
      swapped = false; //Swapped variable is assigned false.
      for (var i=0; i < arr.length-1; i++) {
          if (arr[i] > arr[i+1]) {
              var temp = arr[i];
              arr[i] = arr[i + 1];
              arr[i+1] = temp;
              swapped = true;
          }
      }
  } while (swapped);
}
bubbleSort(arr);
console.log(arr);
