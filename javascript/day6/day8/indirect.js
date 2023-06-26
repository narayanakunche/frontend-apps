
/** getElementById */
// let a=document.getElementById("demo")
// console.log(a);
// a.textContent="world"
// let b=document.getElementsByClassName("demo1")
// console.log(b);
// // b[0].textContent="ganeshh2"
// for(let i=0;i<b.length;i++){
//     b[i].style.backgroundColor="aqua";
//     b[i].textContent="ganesh";
//     b[i].style.color="blue";

// }
// let c=Array.isArray(b)//cheking it is array or not
// console.log(c);
// let d=Array.from(c)//form is a method it covert anything to array
// console.log(Array.isArray(d));
// console.log(d);
/** getElementByClass */
// let a=document.getElementsByClassName("demo1")
// console.log(Array.isArray(a));
// console.log(Array.isArray(Array.from(a)));
// a[0].textContent="ganesh"
/** getElementByTag */
// let a=document.getElementsByTagName("h3")
// console.log(a);
// console.log(Array.isArray(a));
// console.log(Array.isArray(Array.from(a)));
// a[0].textContent="changed"
// a[0].style.backgroundColor="red"
// a[0].style.color="aqua";
// a[0].style.textShadow="10px 10px 1px blue"
/** getElementByName */
let c=document.getElementsByName("demo2")
console.log(c);
c[0].textContent="gsnes"
/** querySelector */
let a=document.querySelector("#demo");
console.log(a);
let b=document.querySelectorAll(".demo1")
console.log(b);
console.log(b[0]);
b[0].textContent="aelectorAll"
let d=document.querySelectorAll("*")
console.log(d);
