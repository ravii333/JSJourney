let score = "30"
let score2 = "30ab"

console.log(typeof score)
console.log(typeof(score2))

let valueInNumber = Number(score) 
console.log(typeof valueInNumber)

let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2)
console.log(valueInNumber2)

// "30" => 33
// "30ab" => NaN (Not a Number)
// true => 1 false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true  0 => false
// "" => false 
// "ravi" => true