const User = {
  name: "John",
  email: "john@mail.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

let newUser = { name: "John", isPaid: true, email: "john@mail.com" };

createUser(newUser);

function createCourse(): { name: string; price: number } {
  return { name: "reactjs", price: 399 };
}

// type User = {
//     name: string,
//     email: string,
//     isActive: boolean
// }

type Mystring = string;

// function createUser(user: User): User{
//     return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: false;
  creditcardDetails?: "number";
};

let myUser: User = {
  _id: "1234",
  name: "h",
  email: "h@mail.com",
  isActive: false,
};

myUser.email = "h@mail.com";

export {};
