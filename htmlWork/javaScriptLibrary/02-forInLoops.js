FOR IN Loops

let student = {name:'Peter', awesome: true, degree: 'javascript', week: 1};
for (item in student){
    console.log(item);
    console.log(student[item]);
}


let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (cat in catArray){
    console.log(cat);
    console.log(catArray[cat]);

}

//
let instructor ="pAul";
let capName;

for (n in instructor){
    if (n==0){
        capName=instructor[n].toUpperCase();
} else {
capName += instructor[n]. toLowerCase();
}
}
console.log(capName);

let's write a for-in loop that capitalizes the first letter of a name


