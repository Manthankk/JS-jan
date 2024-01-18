const name="Manthan"
const repoCount=9

console.log(`Hello my name is ${name} and my rep count is ${repoCount}`);  // string interpolation= `  ${}`

const gameName= new String ('man-k-k')

console.log(gameName[1]);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3)); //character posn
console.log(gameName.indexOf('m'));  //index posn

const newString= gameName.substring(0,2)
console.log(newString);

const otherString= gameName.slice(-1,3)  //-ve can be used in slice
console.log(otherString);

const newStringOne="   Manthan   "
console.log(newStringOne);
console.log(newStringOne.trim());  //use to remove all extra space 

const url="https://manthan.com/manthan%20khamkar"

console.log(url.replace('%20','@'));  // replaces the word

console.log(url.includes('manthan')); // checks that the given is in the url or not if yes then return true

console.log(gameName.split('-'));