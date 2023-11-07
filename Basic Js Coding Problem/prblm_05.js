//Problems_05: [10, 20, 43, 32, 56] ... This is an array. Noow do some using the reduce function.
function sumArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
const arr = [10, 20, 43, 32, 56];
console.log(sumArray(arr));