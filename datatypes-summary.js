// primitive

//  7 types :String,Number,Boolean,null,undefined,Symbol,BigInt(larger values)

//references(Non premitive)
//Arrays,Objects ,Functions

const score= 100
const scoreValue=100.3

const isLoggedIn= false
const outsideTemp=null
let userEmail;

const id=Symbol("7113")
const anotherId=Symbol("7113")

// const bigNumber=234566543345n
console.log( id=== anotherId);

//ojects are in { }  //can be stored in an variable

const heros=["Shaktiman","Superman","Ironman"]

let myObj={
    name : "manthan",
    age :  22,
}

const myFunction= function(){
    console.log("hello chai")

}

console.log(typeof anotherId);

///////////////////////////////////////

//Memory-- Stack( Primitive) ,Heap  (Non-primitive)
// in stack you gets a copy
//In Heap you geta reference of original value

let myName="manthandotcom"

let anotherName=myName
anotherName="JScode"

console.log(myName);
console.log(anotherName);

let userone={
    email:"manthan@amazon.com",
    pin : "mk@upi"
}

let userTwo=userone  // stred in heap as a reference
userTwo.email="Thomas@google.com" //for storing new we write user.__
userTwo.pin="sbi@pin"

console.log(userone.email);
console.log(userTwo.email);