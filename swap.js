/*let x=3
let y=5
x=x+y;
y=x-y;
x=x-y;
console.log(x);
console.log(y);*/
let a=56;
let reversed=0;
while(a!=0){
    let num=a%10;
    reversed=reversed*10+num;
    a=Math.floor(a/10);
}
console.log(reversed);

