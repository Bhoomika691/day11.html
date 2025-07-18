function m(func,count)
{
    for(let i=1;i<=count;i++)
    {
        func();
    }
}
let greet=function()
{
    console.log("hello");
}
m(greet,100);
m(function(){
    console.log("namaste");
},1000);