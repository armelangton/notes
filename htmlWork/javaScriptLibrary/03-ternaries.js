/*
TERNARIES

5-expressionsAndOperators
03-ternaries
*/

let x = -6;
x > 0 ? console.log("x is positive") : console.log("x is negative");

if (x>0){
    console.log('xis positive');
}else{
    console.log('x is negative');
}


EXAMPLE 1)

let greeting = 'salutations';

if (greeting.length > 10){
    console.log('that is a long greeting!');
} else if (greeting.length==10) {
    console.log('your greeting is exactly 10 characters!');
} else{
    console.log('what a normal greeting');
    
}

EXAMPLE 2)

greeting.length> 10 ? console.log('that is a long greeting!') :
gretting.length == 10 ? console.log('your greeting is exactly 10 characters') :
console.log('what a normal greeting');



