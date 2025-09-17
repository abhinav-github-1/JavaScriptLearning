//Primitive

// 7 types:String,Number,Boolean,null,undefined,Symbol,BigInt
const score=100;
const scoreValue=100.3;

const isLoggedIn=false;
const outsideTemp=null;
let userEmail;

const id=Symbol('123');
const anotherId=Symbol('123');

console.log(id==anotherId);

const bigNumber=6567278238n;
//Reference(Non primitive)

//Array,Objects,Functions

const heros=["shaktiman","naagraj","doga"]
let myObj={
    name:"abhi",
    age:20,
}

const myFunction=function()
{
    console.log("Hello World");
}

console.log(typeof myFunction);

// +++++++++++++++++++++++++++++++++++

//Stack(Primitive),Heap(Non-Primitive)

let myYoutube="abhi";
let anotherName=myYoutube;
anotherName="abhinav"
console.log(myYoutube);
console.log(anotherName);

let userOne={
    email:"xyz@yahoo.com",
    upi:"user@ybl"
}
let userTwo=userOne;
userTwo.email="abc@google.com";
console.log(userOne.email);
console.log(userTwo.email);
//Stack generates copy whereas Heap generates refernce