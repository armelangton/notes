/*
LOOPS
3-Loops
*/
For OF requires "THE THING" your looping through be iterable/or Numbered 
FOR IN does not 

let student = {name :'Peter', awesome: true, degree: 'javascript', week: 1};

//for (item in student){
    console.log(item);
    console.log(student)[item]);
}

let catARRAY = ['tabby', 'british shorthair', 'burmese', 'main coon', 'rag doll'];

for (cat of catARRAY){
    console.log(cat, "says meow");
}




































































Loops offer a quick and easy way to do something repeatedly 
There are many differet ways to do all but they all the same thing:
For import {  } from "do while
while
labelded
break continue
for in
for of 
.forEach
.mao
*/

//Loop structure: a) creaate of an indexing variable 
b)a run condition 
c) change to the indexing variable
count to 10 from to 0 to log the numbers:

for (let i = 0; i <= 10; i++){
    console.log(i);
}

//counts to -25 by -3 starting from 2, logs the numbers
for (let i = 2; i>=-25; i = i -3){
    console.log(i);

}
//diplay the letters in a name individually
let name = 'Kinkade';



for (let i = 0; i< name.length; i++){

   //for loops can use lots of variables: 
    let start = 2;
    let stop = Math.floor(Math.random()*30);
    let increment = 3;

    for (let i = start; i <= stop; i = i + increment){
        console.log(i);
    }

