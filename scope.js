function test1(){
    var a = 1;
    if(true){
        var a = 2;
        console.log(a);
    }
    console.log(a); // var is function scoped hence value of a is updated to 2 
}
function test2(){
    let b = 1;
    if(true){
        let b = 2;
        console.log(b);
    }
    console.log(b); // let is block scoped hence value of b outside the block is not updated to 2 
}

test1();
test2();

console.log(c) // undefined 
var c = 23;

console.log(d); // ReferenceError: Cannot access 'b' before initialization as it moves into  TDZ
let d = 20;

console.log(e); // ReferenceError: Cannot access 'c' before initialization as it moves into  TDZ
const e = 30;



