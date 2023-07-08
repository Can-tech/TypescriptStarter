"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
addTwo(2);
getUpper("hello");
function signUpUser(name, email, isPaid) { }
//signUpUser(1,2,3)
//-----------------Optional Parameters-----------------
// function getValue(myVal: number):boolean{
//     if(myVal > 5){
//         return true
//     }
//     return "200 OK"
// }
var getHello = function (s) {
    return "";
};
//-----------------Automatic Choose Return Type-----------------
var heros = ["thor", "ironman", "sipderman"];
//const heros = [1,2,3]
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
//-----------------Void: Returns Nothing Just logging info-----------------
function consoleError(errmsg) {
    console.log(errmsg);
}
//-----------------Never: Function never returns anything-----------------
function handleError(errmsg) {
    throw new Error(errmsg);
}
