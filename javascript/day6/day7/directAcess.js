// document.write("hello world")
// document.writeln("ganes")
// document.writeln("ganes")
// document.writeln("ganes")
// document.writeln("ganes")
// document.write(typeof document)
// console.log(typeof document);
//  console.dir(document)
// // console.log(document);
// console.log(document.URL);
// console.log(document.doctype);
// console.log(document.head);
// document.title="ganesh"
// console.log(document.body);
// document.body.style.backgroundColor="crimson"
console.log(document.links);
let links=document.links
console.log(links[0]);
/**loops for 50 links may be */
for(let i=0;i<links.length;i++){
    console.log(links[i]);
    links[i].className="demo"
}
console.log(document.images);
let images=document.images
for(let i=0;i<images.length;i++){
    console.log(images[i]);
    if(i==images.length-1){
        images[i].id="idid"
        images[i].style.height="200px"
        images[i].style.width="200px"
        images[i].style.borderRadius="100%"
    }
    else{
    images[i].className="images"
    images[i].style.height="200px"
    images[i].style.width="200px"
   // images[i].style.backgroundImage=URL("https://cdn.pixabay.com/photo/2023/01/30/20/02/bird-7756521_640.jpg")
}
}
console.log(document.forms)
console.log(document.URL);
console.log(document.body);
console.log(document.cookie);
console.log(document.doctype);
console.log(document.fonts);
console.log(document.getRootNode);//just for knowing...
console.log(document.head);
console.log(document.location);
console.log(document.onclick);
console.log(document.parentNode);
console.log(document.title);
document.title='naidu';
console.log(document.title);
/** indirect access */