const user = {
    username : "Royal" ,
    password : 123,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        }
}

// user.welcomeMessage()
// user.username = "Ravi"
 //user.welcomeMessage()

 //console.log(this);  In node enviourment this refers to the empty object -> {}

 const sum = function (num1 , num2)  {  // function
    return num1 + num2;
 }

  const add = (num1, num2) => {   // Arrow function

      return num1 + num2;
  }

  const add2 = (num1, num2) => num1 + num2;  // Arrow function

  const add3 = (num1, num2) => (num1 + num2); // Arrow function

  console.log(sum(2,4));