
const multiplier=(x:number,y:number):string=>{
return (x*y).toString();
}

interface ICar {
    color:string;
    model:string,
    topSpeed?:number;

}
const car1: ICar={
    color:'green',
    model:'bmw',
    topSpeed:100
}
const car2: ICar={
    color:'red',
    model:'mercedes',
  
}
export  const cars=[car1,car2]
