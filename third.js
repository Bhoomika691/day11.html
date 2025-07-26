/*arr1=[1,2,3,4,5]
arr1
let[number2,number1]=arr1;
console.log(number2);
console.log(number1);
let [num1,num2,...num]=arr1;
console.log(num);*/
const person={
name:"bhoomi",
age:19,
username:"@bhoomika12",
password:44784889
}
console.log(person);/*{name: 'bhoomi', age: 19, username: '@bhoomika12', password: 44784889}*/
let {username,password}=person
console.log(username)/*'@bhoomika12'*/
console.log(password);/*44784889*/
let {username:user,password:security}=person
console.log(user);/*'@bhoomika12'*/
console.log(security);/*44784889*/