//Dates

let myDate= new Date();
// console.log(myDate.toString());  // gives good date]
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toTimeString()); 
// console.log(myDate.toLocaleTimeString()); 
// console.log(myDate.toUTCString()); 
// console.log(myDate.getTimezoneOffset()); 

console.log(typeof myDate );

// let myCreateDate=new Date(2024,0,17)

let myCreateDate=new Date("1-13-2024")

// console.log(myCreateDate.toLocaleString());

let myTimeStramp= Date.now()
console.log(myTimeStramp)
console.log(myCreateDate.getTime());


let newDate= new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday:"narrow",
})

