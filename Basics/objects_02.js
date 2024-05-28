const metaUser = new Object() // singleton object
//console.log(metaUser)

metaUser.id = "123r"
metaUser.name = "Ravi"
metaUser.isLoggedIn = false

const metaUser2 = {} // Non singleton object
//console.log(metaUser2)

const regularUser = {
    email: "user@gamil.com",
    fullName:{
        userFullname:{
            firstName: "Ravi",
            lastName: "Kumar"
        }
    }

}

console.log(regularUser.email)
console.log(regularUser.fullName.userFullname)


// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
        id: 1,
        email: "r@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "ravi"
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]