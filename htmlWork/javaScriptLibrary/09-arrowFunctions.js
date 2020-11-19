/*
Arrow Function
*/
//normal function declaration
function coffee(){
    return "coffee is good";
}
//normal function expression
let tea=function() {
    return 'tea = healty'
}
console.log(coffee));
console.log(tea));

//arrow function are always *anonyamous*
//arow functions expressions

let hotchocolate = () => {
    return 'hot chocolate is king';
}
console.log(hotChocolate());

let animals = (kittens, puppies) => {return 'I have ${kittens} cat(s) and ${puppies} dog(s)'};
console.log(animals(3,2))

console.log(animals(3,2))
console.log(animals(0,0));

//concise vs block body

let apples = (x) => 'There are ${x} apples';
console.log(apples(10));

//block
let bananas = x=. [
    return 'There are ${x} bananas';
}
console.log(bananas(5));
//return must be explicitly written ina blick-body arrow function
let func = () ="hi";
]
