Sorts

1.  Sort the sequence 4 6 8 2 9 5 1 7 3 by hand with:
//Insertion sort
let insertionSort = (inputArr) => {
    let length = inputArr.length;
    for (let i = 1; i < length; i++) {
        let key = inputArr[i];
        let j = i - 1;
        while (j >= 0 && inputArr[j] > key) {
            inputArr[j + 1] = inputArr[j];
            j = j - 1;
        }
        inputArr[j + 1] = key;
    }
    return inputArr;
};
We start the for loop at 1 because in the first step, the sub-array only contains
the value at index 0 and has a length of 1, so that sub-array is trivially already
sorted. We add the key to inputArr[j + 1] because inputArr[j] would correspond to
the first item in the sub-array whose value is less than (or equal to) the key’s
value, so we want to place the key immediately to the right of that item. You can
also add some console.log statements in the while loop to see how the array looks
after each iteration as it’s being sorted.

Another Example:
12, 11, 13, 5, 6

Let us loop for i = 1 (second element of the array) to 4 (last element of the array)

i = 1. Since 11 is smaller than 12, move 12 and insert 11 before 12
11, 12, 13, 5, 6

i = 2. 13 will remain at its position as all elements in A[0..I-1] are smaller than 13
11, 12, 13, 5, 6

i = 3. 5 will move to the beginning and all other elements from 11 to 13 will move one position ahead of their current position.
5, 11, 12, 13, 6

i = 4. 6 will move to position after 5, and elements from 11 to 13 will move one position ahead of their current position.
5, 6, 11, 12, 13


//Quicksort (picking the first element as the pivot)
Quick Sort is one of the most famous and effective Sorting Algorithms.

function quickSort(arr) {
  if (arr.length < 2) return arr;
  let pivot = arr[0];
  const left = [];
  const right = [];
  //When a for loop iterates through all elements our left array fills with elements less than the pivot and right — greater than
  //the pivot. The method push here adds elements at the end of the left and right arrays.
  for (let i = 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i]);//The method push here adds elements at the end of the left and right arrays.
    } else {
      right.push(arr[i]);
    }
  }
  //The concat() method is used to merge two or more arrays)
  return quickSort(left).concat(pivot, quickSort(right));
}

Let’s look at the simple example with the following array:
[5, 2, 6, 1, 30, -10].

Pivot is the first element. It is 5. The algorithm compares each element after the pivot. It compares 5 and 2.
2 is less and 5 (2 < 5) and hence 2 is added to the left array. Then it compares 5 and 6.
6 is greater than 5 (6 > 5) and the algorithm adds 6 to the right array. And it does the same with the other elements.

Final left and right arrays will look as follows:

left: [2, 1, -10]
right: [6, 30]

But now you likely have a question: “And how does it help to sort the array?” The answer is simple.
We need to call our quickSort function recursively on our left and right arrays and insert between them the pivot.
Why? Because pivot is greater than elements of the left array and less than elements of the right array.
And thus it must be between them in our final sorted array. In order to return the final sorted array, we need
to write the return and the something which we want to return.

//Quicksort (using the median-of-three pivot)
In the median of three technique the median of first, last and middle element is chosen as the pivot.
It is done so as to avoid the worst case of quick sort in which the time complexity shoots to O(n2). 3.

For example, try applying quicksort to this array: [2, 6, 3, 1, 6, 5, 2, 4, 8] With the median-of-three rule,
the pivot is the median of the leftmost, center, and rightmost elements. So the median of 2, 6, and 8 is 6.

//Mergesort
Quicksort is at one end of the spectrum of divide-and-conquer algorithms, with mergesort at the opposite end.

Quicksort is a conquer-then-divide algorithm, which does most of the work during the partitioning and the recursive calls.
The subsequent reassembly of the sorted partitions involves trivial effort.
Mergesort is a divide-then-conquer algorithm. The partioning happens in a trivial way, by splitting the input array in half.
Most of the work happens during the recursive calls and the merge phase.

function mergeSort (unsortedArray) {
  // No need to sort the array if the array only has one element or empty
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }
  // In order to divide the array in half, we need to figure out the middle
  const middle = Math.floor(unsortedArray.length / 2);

  // This is where we will be dividing the array into left and right
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  // Using recursion to combine the left and right
  return merge(
    mergeSort(left), mergeSort(right)
  );
}

// Merge the two arrays: left and right
function merge (left, right) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;

  // We will concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // move left array cursor
    } else {
      resultArray.push(right[rightIndex]);
			rightIndex++; // move right array cursor
    }
  }

  // We need to concat to the resultArray because there will be one element left over after the while loop
  return resultArray
          .concat(left.slice(leftIndex))
          .concat(right.slice(rightIndex));
}

//Bottom-up mergesort using runs
function bottomUpMergeSort(inputArray) {
    var length = inputArray.length,
        size = 1,
        temp = []; //allocate space just once

    for (size; size < length; size = size*2) {
        var low = 0;

        for(low; low < length-size; low += size*2) {
            var mid = low + size - 1,
                high = Math.min(low + (size*2 - 1), length -1);

            ArraySort.merge(inputArray, temp, low, mid, high);
        }
    }

    return inputArray;
}

2.  Sort the sequence   2152    3180    725    1781    1248    4590    2990    633   by hand:
Insertion sort
Quicksort (picking the first element as the pivot)
function basicQuicksort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr.splice(Math.floor(Math.random() * (arr.length - 1)), 1);
  const left = [];
  const right = [];
  arr.forEach(el => el < pivot ? left.push(el) : right.push(el));
  const sortedLeft = basicQuicksort(left);
  const sortedRight = basicQuicksort(right);
  return [...sortedLeft, ...pivot, ...sortedRight];
}

function quicksort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return;
  const pivot = arr[Math.floor((left + right) / 2)];
  const index = partition(arr, left, right, pivot);
  quicksort(arr, left, index - 1);
  quicksort(arr, index, right);
  return arr;
}
function partition(arr, left, right, pivot) {
  while (left <= right) {
    while (arr[left] < pivot && left <= right) {
      left++;
    }
    while (arr[right] > pivot) {
      right--;
    }
    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return left;
}
Quicksort (using the median-of-three pivot)
Mergesort
Bottom-up mergesort using run


3.  Suppose that you want to sort the books on your bookshelf, say into alphabetical order, by hand. What would be a good algorithm for doing this?
QuickSort
Does the answer change if you have very many (say thousands) of books? Does it depend on what order the books are currently in?
No, quicksort can handle large size data sets.
4. Can you use sorting to remove all duplicate elements from the list 4 1 6 3 8 4 2 9 4 5 1 7 3?
const removeDuplicates = nums =>{
  if (nums.length ===0) return 0
  let i = 0
  let j = 1
  while (j < nums.length){
    if (nums[j] !== nums[i]) {
      i++
      nums[i] = nums[j]
      j++
    }else j++
  }
  return i + 1
};
