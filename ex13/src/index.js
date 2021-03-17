function inverseWhile() {
    var fiveNumbers = "5";
    var i = 4;

    // Only change code below this line.

    while(i >= 0) {
        fiveNumbers += "," + i;
        i--;
    }
    return fiveNumbers;
}
// Only change code above this line.

console.log(inverseWhile());

module.exports = inverseWhile;
