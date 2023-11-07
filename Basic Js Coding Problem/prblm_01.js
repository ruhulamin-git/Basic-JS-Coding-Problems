//Problems_01: Write a function that takes an array of numbers and returns the largest number in an array.

function findLargestNumber(arr) {
    var largest = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
var arr = [-1, -4, -3, 230, 14, 50];
var largest = findLargestNumber(arr);
console.log("The Largest Number is: ", largest);