/*const student={
    name:"bhoomi",age:19,math:90,eng:95,bio:85,getavg()
    {
        let avg=(math+eng+bio)/3;
        console.log(student.getavg());
    }
}*/
const student={
    eng:95,
    bio:85,
    
    get(){
        console.log(this);
    },
    getavg:()=>
    {
        console.log(this);
    }
}