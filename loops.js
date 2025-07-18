//to print array of elements//
/*for(let i=1;i<100;i++)
{
    console.log(i);
}*/
//to print odd numbers//
/*for(let i=1;i<15;i++){
    if(i%2!=0)
        console.log(i);
}*/
//to print even numbers//
/*for(let i=1;i<20;i++){
    if(i%2==0)
        console.log(i);
}*/
//to print fav movie//
/*let f="pushpa2";
let guess=prompt("guess my fav movie");
while(guess!=f)
{
    if(guess=="quit")
        break;
    guess=prompt("wrong answer enter again");
}
if(guess==f)
    console.log("congrats");
else{
    console.log("wwelcome");
}*/
//array elements//
/*arr=[1,5,7,6]
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}*/
//for of loop//
/*for(number of arr){
    console.log(number);
}*/
//to print all characters//
/*for(char of "coding"){
    console.log(char)
}*/
/*arr=[[1,2,3],[4,5,6],[7,8,9]]
for(rows of arr){
    for(col of rows){
        console.log((col));
    }
}*/
/*const person={name:"bhoomi",age:19,qualification:"b.tech"};
console.log(person);
console.log(person["age"]);
console.log(person["name"]);
console.log(person["qualification"]);*/
/*const obj={null:0,undefined:1,let:12};
console.log(obj);
console.log(Object.department="cse");
console.log(delete obj.null);
console.log(delete obj.name);*/
const students=[
    {name:"bhoomi",age:19},
    {name:"puji",age:20},
    {name:"mahi",age:25}
];
console.log(students[0]);
console.log(students[0][1]);
console.log(students[1]["name"]);
console.log(students[2]["age"]);