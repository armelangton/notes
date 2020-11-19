
 */this variable declaration is globally scoped/*
 Example 1
var x = 12;         
function scope(){
    var x = 33;
    var y = 10;
    console.log(x);
}
function scope(){ 
    var x = 33;
    console.log(x);
}
scope(); //logs 33
// console.log(y);
console.log(x); //logs 12

//example 2

var x =12;

function scope(){
    x = 33;
    console.log(x);
}
scope() /33
console.log(x) //33

//Example 3. With this one the code reads top to bottom so if the first is true, and the second is true. 
Then, the scope will run and the third line will be the answer to the problem. 

var x = 1;

function scope(){
    var x = 2;
    function scopeInner(){
        var x = 3;
         console.log(x); //3
    }
         scopeInner();
         console.log(x); //2
    }
scope();
    console.log(x); // now we are in the global scope so this equals 1
    
    //EXAMPLE 4 . If 

var x = 12;

    function scope (){
        var x = 33;
        if (true){
            let x = 45;
            console.log(x); //45
        }
        console.log(x); //33
    }

scope()
console.log(x); //12

//example 5

var x=12
function scope(){
    var x = 33;
    if (true){
    var x = 45; //45
console.log(x);
 }
 console.log(x); //it's going to get 45 againg
}
scope();
console.log(x); //it's getting the global number





