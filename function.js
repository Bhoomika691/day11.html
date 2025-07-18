/*function myfun(a,b)
{
    return a+b;
}
console.log(myfun(2,4));*/
/*let x=20;//global scope
function myfun()
{
    let y=10;//function scope
    console.log(y);
    console.log(x);
}
myfun();
console.log(x);
console.log(y);*/
let x=20;
function myfun()
{
    let y=10;
    console.log(x);
    console.log(y);
    function out()
    {
        let z=10;
        console.log(z);
        console.log(x);
    console.log(y);
    }
    out();
}
console.log(x)
myfun();
console.log(x);
console.log(y);