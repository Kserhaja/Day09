function compareDifferentValues(m, n) {
    
    if(m === n) {
   // Only change code below this line.
   return "Equal";
    };
    return "Not Equal";
// Only change code above this line.

}
compareDifferentValues();



console.log(compareDifferentValues(8, "8"));
console.log(compareDifferentValues("8", 8));
console.log(compareDifferentValues('8', 8));
console.log(compareDifferentValues("8", "8"));
console.log(compareDifferentValues(8, 8));


module.exports = compareDifferentValues;