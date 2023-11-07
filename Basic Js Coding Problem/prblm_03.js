// Write a function that takes an array of numbers and returns a new array containing only the even numbers in the original array.
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var even = [];
function findTheEvenNumber(arr) {
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] % 2 == 0)
            even.push(arr[i]);
    }
    return even;
}
var evenNumbers = findTheEvenNumber(arr);
console.log("The Even Number is: ", evenNumbers);



