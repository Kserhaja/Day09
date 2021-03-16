const myFunction = require("../../ex03/src");

function myEqualFunction(num) {
    
        if(num === 23) {
       // Only change code below this line.
       return "Equal";
        };
        return "Not Equal";
   // Only change code above this line.
    
}




myEqualFunction(5);
myEqualFunction(23);
myEqualFunction("23");
myEqualFunction('23');
myEqualFunction("text");


console.log(myEqualFunction(5));
console.log(myEqualFunction(23));
console.log(myEqualFunction("23"));
console.log(myEqualFunction('23'));
console.log(myEqualFunction("text"));


module.exports = myFunction;