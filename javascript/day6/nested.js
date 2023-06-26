function parent(){
    let a=10
    function child(){//nested function, closure 
        let b=20;
        console.log(a);
        console.log(b);
    }
     return child
}
// parent()() or
let res=parent()
res();
(//imediate invoking function
    function demo(){
        console.log('hello');
    }
)()