// function one() {
//     setTimeout(function() {
//         console.log("functino 1");
//         two();
//     },3000)
// }

// function two() {
//     console.log("functino 2");
// }
// one();;

function person(name, fn){
    console.log("Name is " + name);
    fn();
}

function callBack() {
    setTimeout(function(){
    console.log("I\'ve been used as a call back...");}, 3000);
}

// person("caller", callBack);