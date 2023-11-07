// Write a function that takes a string and returns the reverse of the string

function GroupOfWord(word) {
    var output = ' ';
    for (var i = word.length - 1; i >= 0; i--) {
        output += word.charAt(i);
    }
    return output;
}
console.log(GroupOfWord('Hi there, this is Ruhul Amin from MD Infotech'));
