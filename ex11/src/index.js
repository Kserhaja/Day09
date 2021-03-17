function switchCase(letter) {
    
    var animals = ("antelope", "bird", "cat", "stuff");

    // Only change code below this line.
    switch(letter) {
        case "a":
            animals="antelope";
            break;
        case "b":
            animals="bird";
            break;
        case "c":
            animals="cat";
            break;
        case 4:
            animals="staff";
    }
    // Only change code above this line.
    return animals;
    
}

switchCase();



console.log(switchCase("a"));
console.log(switchCase("b"));
console.log(switchCase("c"));
console.log(switchCase("4"));


module.exports = switchCase;