// let a=document.getElementById("demo")
// console.log(a);
// a.setAttribute("class","demo1")
// let demo=document.links
// console.log(demo);0
// console.log(demo[0]);
// demo[0].setAttribute("href","https://www.youtube.com")
// let a=document.body.innerHTML+="<h2>hello world</h2>"
// console.log(a);
// let b=document.body.innerHTML+="<ol> <li>red</li><li> blue</li></ol>"
// console.log(b);
// let ol=document.getElementsByTagName("li");
// console.log(ol);
// ol[0].style.color="red"
// ol[0].style.backgroundColor="aqua"
// ol[1].style.color="blue";
// let c=document.body.innerHTML+="<table> <tr><th>a</th><td>ganesh</td></tr> <tr><th>a</th><td>ganesh</td></tr></tabel>"
// let d=document.getElementsByTagName("table")
// d[0].style.border="2px solid red"
// d[0].style.borderCollapse="collapse"
// let e=document.getElementsByTagName("th")
// for(let i=0;i<e.length;i++){
//     e[i].style.border="2px solid blue"
//     e[i].style.backgroundColor="crimson"
//     //e[i].style.borderCollapse="collapse"; 
// }
// let f=document.getElementsByTagName("td")
// for(let i=0;i<f.length;i++){
//     f[i].style.border="2px so lid red"
//     f[i].style.backgroundColor="hotpink"
//   //  f[i].style.borderCollapse="collapse";
//}
/** ol starting */
// let a=document.createElement("p")
// console.log(a);
// console.log(a.textContent="ganesh");
// document.body.appendChild(a)
// let ol=document.createElement("ol")
// document.body.append(ol);
// console.log(ol);
// let li1=document.createElement("li")
// ol.append(li1);
// li1.textContent="ganesh"
// console.log(li1);
// let li2=document.createElement("li")
// ol.append(li2)
// li2.textContent="kunche"
// console.log(ol);
/** table by using create element */
let a=document.createElement("table")
document.body.append(a);
a.style.border="2px solid grey"
a.style.borderCollapse="collapse"
let b=document.createElement("tr")
a.appendChild(b);
b.style.border="2px solid grey"
b.style.backgroundColor="crimson"
let th1=document.createElement("th")
b.appendChild(th1)
th1.style.border="2px solid grey"
th1.textContent="name"
let th2=document.createElement("th")
b.appendChild(th2);
th2.style.border="2px solid grey"
th2.textContent="id"
let th3=document.createElement("th")
b.appendChild(th3);
th3.style.border="2px solid grey"
th3.textContent="class"
let tr2=document.createElement("tr")
a.appendChild(tr2)
tr2.style.border="2px solid grey"
tr2.style.backgroundColor="aqua"
let td1=document.createElement("td")
tr2.appendChild(td1)
td1.style.border="2px solid grey"
td1.textContent="ganesh";
let td2=document.createElement("td")
tr2.appendChild(td2)
td2.style.border="2px solid grey"
td2.textContent="1"
let td3=document.createElement("td")
tr2.appendChild(td3)
td3.textContent="b tech"
td3.style.border="2px solid grey"
// console.log(a);


