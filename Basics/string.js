const name = "ravi "
const skillCount =  0

//console.log(name + skillCount + " Big Zero")

//console.log(`Hello i am a learner my name is ${name} and my skills count is ${skillCount}`);

const gameName = new String('ravikumar')
//console.log(gameName[0])
//console.log(gameName.__proto__)

//console.log(gameName.length)
//console.log(gameName.toUpperCase())

const newGame = gameName.substring(0,6)
//console.log(newGame)

const anotherGame = gameName.slice(-5,6)
//console.log(anotherGame)

const newString = "      ravi--     "
console.log(newString.trim())

const url = "https//ravi.com/ravi%20kumar"
console.log(url.replace('%20','-'))

console.log(url.includes('ravi'))

console.log(url.includes('learn'))

console.log(url.split('/'))