/**function declaration */
functionDeclaration()//hoisting
function functionDeclaration(){
    console.log("ganesh naidu");
}
/**function expression */
let a=function(){
    console.log("function expression");// wecant hoisted
}
a()
/** function programming*/
let c=function(a,b,task){//higher order function
    let c=task(a,b)
    console.log(c);
}
c(10,20,function(a,b){return a+b})// call back function
c(10,20,function(a,b){return a-b})
c(10,20,function(a,b){return a*b})
c(10,20,function(a,b){return (a+b)+" "+(a/b)})
/** arrow function */
let arrow=()=>{console.log("arrow");}//we want to reduce the syntax becuse of that we will go to arrow function
arrow()
/**nested function */
function parent(){
    let a=10;
    function child(){
        let b=20;
        console.log(a+b);
    }
    child()
}
 let d=parent
 d()
 parent();
 /** imediate invoking function */
 ( function parent(){
    let a=10;
    function child(){
        let b=20;
        console.log(a+b);
    }
   child()
}
)()
