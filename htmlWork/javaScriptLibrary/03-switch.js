/*
SWITCH STATEMENTS
*/

let friend = 'Kenn';

switch(friend){
    case 'Tom':
       console.log('Hey Tom, when will you bring sourdough bread for me?');
        break;
    case 'Kenn':
        Console.log('Hey Kenn, do you own a wolf in your backyard?');
        break;
        case "Alecx":
        Console.log('Hey Alecx, how many Magic cards do you own?');
        break;
        default:
        Console.log ('I'm sorry, ${friend},but do I know you?);
}
let yep = true;
switch (typeof yep== "string" || typeof yep == 'boolean'){
    case true:
       Console.log('yep is a string or boolean');
       break;
       default:
           Console.log('yep is not a string or a number')