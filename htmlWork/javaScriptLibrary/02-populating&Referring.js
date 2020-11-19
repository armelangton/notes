/*
ARRAYS
*/

//whatt is an array?
//has []
//can hold multiple datatypes
//arrays can list datatypes in an ordered, numbered way

let students = ['Tony','Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha']];
//hidden keys:    0        1         2       3     4    5       6
console.log(typeof students); //typeof doesn't tell me my variable is any array -> object
console.log(students instanceof Array); //instanceof tells me my array is an array
console.log(students[2]);
console.log(students[1]);
console.log(students[6]);

let name = students[6][1];
console.log('hello ${name}, you look nice today.');

//recall for-of loop 

let food = ['Pecan pie', 'shrimp', 'Quesadilla', 'cheesecake', 'hotdog'];
for (f of food){
        console.log(f+' is amazing!');
}

//array methods
food.push('Pizza'); //added to the end of our array
console.log(food);
food.splice(1, 2, 'Bananas');
console.log(food);
food.splice(2, 0, 'Sweet potato pie'); //asks for an insertion point, how many things to remove, then
//the item or items to add
console.log(food);
food.pop(); //removes the last element of an array