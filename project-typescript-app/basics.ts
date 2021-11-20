// primitive types

let age: number;
age = 12;
let userName: string;
userName = "such";
let isInstructor: boolean;
isInstructor = false;

// complex types = arrays + objects

let hobbies: string[];
hobbies = ["reading", "snoozing"];
let crazyPerson: any; //fallback - back to standard javascript

// type alias - specified by user + complied to js later
type Person = {
  name: string;
  age: number;
};
let person: Person;
// let person: {
//   name: string;
//   age: number;
// };
person = {
  name: "such",
  age: 12,
};
let people: Person[];
// let people: {
//   name: string;
//   age: number;
// }[];

// type inference - without explicitly stating the types, typescript recognises majority

let course = "React - the complete guide";

// union types
let courseName: string | number = "React - the complete guide";
courseName = 12345;

// functions + parameters

function add(a: number, b: number): number | string {
  // infers that the returned value is number
  return a + b;
}

// type void
function printValue(value: any): void {
  console.log(value);
}

// generics - enables reusability of functions so you can pass various types to same function

function insertAtBegining<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBegining(demoArray, -1); //should get [-1,1,2,3]

const stringArray = insertAtBegining(["a", "b", "c"], "d");
// updatedArray[0].split("");
// unless <> are used to tell it what the output type should be as well as parameters types
