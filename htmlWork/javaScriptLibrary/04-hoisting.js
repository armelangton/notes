console.log(scissors);
var scissors = "blue";

//example 1 breakdown:
var scissors;
console.log(scissors;
    scissors = 'blue';

//example 2: neither is really a good way to work for now because they can be broken so easily. 

function hoistTest(){
    console.log(testVar);
    var testVar = 10;
    console.log(testVar);
}
hoistTest();
