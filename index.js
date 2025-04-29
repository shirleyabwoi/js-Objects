// Create a function constructor called Employee that accepts a name, position, and salary. 
// Create an array of 5 employees. Write a program that increases the salary by 10% for 
// employees who have the position "developer" and print the updated employee list. (5 pts)

function Employee(name,position,salary){
    this.name=name
    this.position=position
    this.salary=salary
}
let allEmployees=[
    new Employee("Shirley","developer",100000),
    new Employee("Bilha","developer",80000),
    new Employee("Abwoi","QA",900000),
    new Employee("Joan","developer",95000),
    new Employee("Dilia","PM", 500000)
]

 allEmployees.forEach(employee =>{
    if(employee.position === "developer"){
        employee.salary*=1.10
    }
})
console.log(allEmployees)

//QST2 Given an array of product objects (each with name, price, and inStock properties),
//  write a function that returns a new array containing only the products that are inStock: 
// true, and sort the available products by price in ascending order.
function sortProducts(arrayOfProducts){
   return arrayOfProducts.filter(item => 
    item.inStock) 
    .sort((a,b) => a.price - b.price)

}
let arrayOfProducts=[
    {name:"Book",price:80,inStock:true},
    {name:"pen",price:90,inStock:false},
    {name:"pencil",price:50,inStock:true},
    {name:"ruler",price:20,inStock:false}
]
console.log(sortProducts(arrayOfProducts))

//QST3 Create an object called grades where the keys are student names and the values are arrays of their scores. 
// Write a function that calculates and prints each student's average score,
//  and if the average is above 70, print "Pass"; otherwise, print "Fail" next to their name
const grades={
    Shirley:[90,40,60,70],   
    Bilha:[40,50,20,90] ,
    Abwoi:[10,20,30,25]
}
function averages(grades){
  return forEach(Object(grades).reduce((sum,score,)=> 
    sum +score)  )
    };

 console.log(averages(grades))

//QST 4 Write a function constructor called User that takes username, email, and isActive (boolean). 
// Create an array of users. Write a program that loops through the array and deactivates users who
//  have not logged in recently (simulate this with a random isActive: false assignment) and print out the usernames of active users.
function Users(userName,email,isActive){
    this.userName=userName
    this.email=email
    this.isActive=isActive
}
let allUsers=[
    new Users("Dilia","diliaoyamo@gmail.com",true),
    new Users("Shirley","shirleyoyamo@gmail.com",true),
    new Users("Bilha","shirleybilha@gmail.com",false)
]

for (let user of allUsers){
    if(user.isActive){
        console.log(user)
    }
}


//QST 5  You have an array of destination objects, each with name, distance (in km), 
// and budgetRequired (in dollars). Write a function that accepts a maximum distance and a budget
//  and returns all destinations the user can afford and reach within that distance. If none are found,
//  return "No destinations available under your budget and distance"
let allDestinations=[
    {name:"Mombasa", distance:15, budgetRequired:10},
    {name:"Nairobi", distance:20, budgetRequired:15},
    {name:"Voi", distance:35, budgetRequired:20}
]


function affordableDestinations(maximumDistance,maximumBudget){
let affordable= allDestinations.filter(destination=>
    destination.distance <= maximumDistance && destination.budgetRequired <= maximumBudget)
    if (affordable.length == 0){
        return "No destinations available under your budget and distance";
    }
    else{return affordable}
}

console.log(affordableDestinations(10,10))


