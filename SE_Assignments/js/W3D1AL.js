//Recalling the sorting algorithms from morning lab.

//1.Choose the most efficient and least efficient algorithm.
Most: Quicksort
Least: Bubblesort
 //1.What data structure is used for both algorithms from step 1
Quicksort:
Quick sort is a highly efficient sorting algorithm and is based on partitioning of array
of data into smaller arrays. A large array is partitioned into two arrays one of which
holds values smaller than the specified value, say pivot, based on which the partition
is made and another array holds values greater than the pivot value.
Quicksort partitions an array and then calls itself recursively twice to sort the two
resulting subarrays. This algorithm is quite efficient for large-sized data sets as its
average and worst-case complexity are O(nLogn) and image.png(n2), respectively.

Bubblesort:
Bubble sort is a simple sorting algorithm. This sorting algorithm is comparison-based
algorithm in which each pair of adjacent elements is compared and the elements are
swapped if they are not in order. This algorithm is not suitable for large data sets
as its average and worst case complexity are of Ο(n2) where n is the number of items.

 //2.Compare the time complexity of both
  Time complexity of Bubble Sort is O(n2).
Bubblesort can be optimized by stopping the algorithm if inner loop didn’t cause any swap.
  Time complexity of QuickSort is O(n2).
QuickSort is faster in practice, because its inner loop can be efficiently implemented
on most architectures, and in most real-world data. QuickSort can be implemented in
different ways by changing the choice of pivot, so that the worst case rarely occurs
for a given type of data. However, merge sort is generally considered better when data
is huge and stored in external storage.

//3.Find a real-life application for following data structures
Graphs: Scientific computations, Social/Knowledge graphs,Google Maps,Reccomendation Engines.
Trees: XML Parser, Databases, Domain Name Server(DNS).
Lists: Implementation of stacks(clicking back button), queues,graphs. Maintaining directory of names.
Maps: Hash table, Binary search tree, Skip list.
