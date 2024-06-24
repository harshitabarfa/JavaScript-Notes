const obj = new Object();  
obj.Id = 101;  
obj.Name = "Harshita barfa";  
obj.Salary = 50000; 
// console.log(obj)

// Keys or values ko print karvana:
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

// console.log(obj.hasOwnProperty("Id")) // Pata karega ki object me is name ki property hai ya nahi.

// Nested objects:
const obj1 = {
    Email : "harshitabarfa3@gmail.com",
    FullName : {
        UserFullName : {
            FirstName : "Harshita",
            LastName : "Barfa"
        }
    }
}
// console.log(obj1.FullName.UserFullName.FirstName)

// Combine Objects:
const obj2 = {
    1 : "A",
    2 : "B"
}
const obj3 = {
    3 : "C",
    4 : "D"
}
// const obj4 = Object.assign({}, obj2, obj3)
const obj4 = {...obj2, ...obj3}
// console.log(obj4)

const data = [
    {
        Id : 1,
        Name : "Harshita",
        SurName : "Barfa"
    },
    {
        Id : 2,
        Name : "Shraddha",
        SurName : "Barfa"
    },
]
// console.log(data[0].Name);

// Object destructured:
const course = {
    CourseName : "JavaScript",
    Price : 999,
    CourseInstructor : "Harshita"
}
// console.log(course.CourseInstructor);
const {CourseInstructor: Instructor} = course
// console.log(CourseInstructor)
console.log(Instructor)
