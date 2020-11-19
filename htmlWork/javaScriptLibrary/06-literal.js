/*
Literal
1-grammarAndtypes
06-literal.js
*/

let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
//                  0       1           2           3           4
console.log(weekDays.toString());
console.log(weekDays[3]);

*/objects have key value pairs/*

let soup = {
    a: 'chicken noodle', */ the key is a, the value is chicken noodle
    b: 'tomato',         /* the key is b, the value is tomato
    c: 'beef and barley' 
    }
console.log(soup.c);



    //array and object literals and sometime functions too(a boolean is true or false 
    a number is just a number). They can hold aarrays objects and even functions. 

let complexArrLiteral = [1, true, 'Academy', [1,2,3], {key: 'test'}, function(){return 'yes'}];
//                      0     1     2           3       4               5       
console.log(complexArrLiteral[5]);
console.log(complexArrLiteral[3]);

letcomplexObjectLiteral = {num: 1, boolean: true, string: 'Academy', arr: [1,2,3], obj: {key: 'test'}, 
func: function(){return 'yes'}};
console.log(complexObjLiteral.func);
