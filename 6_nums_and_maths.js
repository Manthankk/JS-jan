const score = 400
console.log(score)
const balance=new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); //for next decimal points number

const otherNUmber= 123.866
console.log(otherNUmber.toPrecision(4)); // focus on the number given in the () and rounds it off

const hundred=1000000
console.log(hundred.toLocaleString('en-IN'));// gives ',' in the numbers

///////////////  ++++++++++++ ///////////////////////

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(5.3));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,3,6,8));
// console.log(Math.max(4,3,6,8));

console.log(Math.random());
console.log((Math.random() * 10) +1) ;
console.log(Math.floor((Math.random()* 10) +1));

const min=10
const max=20
console.log(Math.floor(Math.random() *(min-max+1))+ min);





