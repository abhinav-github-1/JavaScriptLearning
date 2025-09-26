const name="abhinav"
const repoCount=30

//console.log(name+repoCount+"hello")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String('bobby-deol-sunny-deol')
console.log(gameName[0]);
console.log(gameName._proto_);
console.log(gameName.length);
// console.log(gameName.charAt('t'));
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString=gameName.substring(0,3);
console.log(newString);

const anotherString=gameName.slice(-8,4);
console.log(anotherString);

const newStringone="  abhinav  "
console.log(newStringone);
console.log(newStringone.trim());

const url="https://abhinav.com/abhinav%20singh"
console.log(url.replace('%20','-'));
console.log(url.includes('abhi'));

console.log(gameName.split('-'));