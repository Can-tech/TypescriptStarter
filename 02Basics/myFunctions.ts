function addTwo(num: number): number {
  return num + 2;
}

function getUpper(val: string) {
  return val.toUpperCase();
}

addTwo(2);
getUpper("hello");

function signUpUser(name: string, email: string, isPaid: boolean) {}
//signUpUser(1,2,3)

//-----------------Optional Parameters-----------------
// function getValue(myVal: number):boolean{
//     if(myVal > 5){
//         return true
//     }
//     return "200 OK"
// }

const getHello = (s: string): string => {
  return "";
};

//-----------------Automatic Choose Return Type-----------------
const heros = ["thor", "ironman", "sipderman"];
//const heros = [1,2,3]

heros.map((hero): string => {
  return `hero is ${hero}`;
});

//-----------------Void: Returns Nothing Just logging info-----------------
function consoleError(errmsg: string): void {
  console.log(errmsg);
}

//-----------------Never: Function never returns anything-----------------
function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

export {};
