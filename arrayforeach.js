let arr=[2,1,3,4];
arr.forEach(function(el)
{
    console.log(el);
});
let m=arr.map(function(el)
{
    return el/2;
})
let even=arr.filter(function(el)
{
    return (el%2==0);
})
let c=arr.every(function(el)
{
    return (el%2==0);
})
let s=arr.some(function(el)
{
    return (el%2==0)
})
let res=arr.reduce(function(res,el)
{
    return (res+el);
})


