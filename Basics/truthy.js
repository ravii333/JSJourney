const userEmail = [];

if(userEmail){
    console.log("Got user Email");
}
else{
    console.log("Don't have user Email");
}

// ** TRUTHY VALUES **

// "0", " ", "false", [], {}, function(){}

// ** FALSY VALUES **

// false, 0, -0, null , BigInt 0n, undefined, NaN

if(userEmail.length === 0){
    console.log("Array is empty")
}

 const emptyObj = {}

 if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
 }


 /* **Nullish coalescing Operator (??) : null undefined**
    The Nullish Coalescing Operator (??) in JavaScript is 
    a logical operator used to provide a default value when dealing with null or undefined values.
     It returns the right-hand operand if the left-hand operand is null or undefined; 
     otherwise, it returns the left-hand operand.
 */

 let val1 ;
 // val1 = null ?? 10
 //val1 = null ?? 10 ?? 20
 val1 = undefined ?? 45
 console.log(val1);

 // Ternary Operator --> condition ? true : false

 const iceTeaPrice = 100

 iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80")









