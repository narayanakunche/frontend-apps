// function declartion statement
// console.log(demo);
// console.log(demo());
// function demo(){
//    return 'hello'
// }
// console.log(demo);
// console.log(demo());
// let a=10
// let b=20;
// let c=a+b
// console.log(c)
// let a=Number(prompt("enter a"))
// let b=Number(prompt("enter b"))

//  let c=a+b
// console.log(c)
// function addition(){
//     let a=Number(prompt("enter a"))
//     let b=Number(prompt("enter number b"))
//     let c=a+b
//     console.log(c);
// }
// addition()
//function expression
// let demo1=function(){
//     let a=Number(prompt("enter a"))
//     let b=Number(prompt("enter number b"))
//     let c=a+b
//     console.log(c);
// }
// demo1();
// function programming
// function operation(a,b,fun){//hiher oreder function
// let c=fun(a,b)
// return c
// }
// let res=operation(10,20,function(a,b){
// return a+b
// })
// console.log(res);
// let res1=operation(10,20,function(c,d){//callable function
//     return c-d
// })
// console.log(res1);
// function addition(a,b,fun){
//     let  c=fun(a,b)
//     return c
// }
// let t1=addition(Number(prompt("enter a")),Number(prompt("enter b")), function(a,b){
//     return (a+b)+" "+(a-b)+" "+(a*b)+" "+(a/b)
// })
// console.log(t1);
// function addition1(a,b,d,fun){
//     let  c=fun(a,b,d)
//     return c
// }
// let t11=addition1(Number(prompt("enter a")),Number(prompt("enter b")),Number(prompt("enter c")), function(a,b,c){
//     return (a+b+b)+" "+(a-b-c)+" "+(a*b*c)+" "+((a/b)/c)
// })
// console.log(t11);
/** greatest of three */

// let res=function(a,b,c,task){
// let d=task(a,b,c)
// return d
// }
// let r=res(Number(prompt("enter a")),Number(prompt("enter b")),Number(prompt("enter c")),function(a,b,c){
//     if(a>b &&a>c){
//         return a
//     }
//     if(b>c &&b>a){
//         return b
//     }
//     else{
//         return c
//     }
// })
// console.log(r);
/** arrow function */
// let arrow=(a,b)=>{
// return a+b
// }
// console.log(arrow(12,11));
// console.log(arrow);
// let imp=(aa,bb)=>{
//     console.log(aa+bb);
// }
// imp(12,134)
/** grater than three number by using arrow function */
// let res=(a,b,c)=>{
// if(a>b &&a>c){
//     return a
// }
// if(b>a &&b>c)
// return b
// else{
//     return c
// }
// }
// let final=res(Number(prompt("enter a")),20,10)
// console.log(final+" greater of three");
//end the arrow function greater
/** using of this key word */
// console.log(window);
// console.log(this);
// var a=10
//   var a=20
// function demo(){
//     var a=110
// console.log(a);
// console.log(this.a);
// }
// demo()
/**arrow fuction with higher order and callable */
let a=(a,b,task)=>{
let c=task(a,b)
}
let re=a(10,20,function(a,b){
 return a+b
})
console.log(re);