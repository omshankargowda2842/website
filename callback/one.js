let sum=(a,b)=>{
    return a+b;
}
let multi=(a,b)=>{
    return a*b;
}
let calculate=(a,b,callback)=>{
    return callback(a,b)
}
let r1=sum(10,20,'sum')
console.log(r1)
let r2=multi(10,20,'multi')
console.log(r2)
let r3=sum('om','shankar')
console.log(r3)
let r4=multi('om','shankar')
console.log(r4)
let r5=sum('5','6')
console.log(r5)