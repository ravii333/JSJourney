// Immediately invoked finction (IIFE)


 (function code(){
    console.log(`DB is connected`);

 }) ();


 //Named iife 

(function username(name){  
    console.log(`DB two is connected ${name}`)
}) ("ravi") // parameter passed


//Un-Named iife

((name)=>{
    console.log(`DB two is connected ${name}`)
    }) ("ravi") // parameter passed
