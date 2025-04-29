// Create a function constructor called Employee that accepts a name, position, and salary. 
// Create an array of 5 employees. Write a program that increases the salary by 10% for 
// employees who have the position "developer" and print the updated employee list. (5 pts)



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


// const grades=[{
//     Shirley:[90,40,60,70]
// },
//     {
//         Bilha:[40,50,20,90]
//     },
//     {Abwoi:[10,20,30,25]}
// ]
// function averages(grades){
//   return Object.values(grades).reduce((sum,score)=> sum +score)  
//     };

//  console.log(averages(grades))

//QST 4 Write a function constructor called User that takes username, email, and isActive (boolean). 
// Create an array of users. Write a program that loops through the array and deactivates users who
//  have not logged in recently (simulate this with a random isActive: false assignment) and print out the usernames of active users.

function user(userStatus){
    return userStatus.map(element => {
        if(element.isActive)
{
    return element.name
}  
else{
    return("Account deactivated")
}  });
}

let userStatus=[
    {name:"Dilia", email:"diliaoyamo@gmail.com", isActive:true},
    {name:"Shirley", email:"shirleyoyamo@gmail.com", isActive:false},
    {name:"Bilha", email:"shirleybilha@gmail.com",isActive:true}
]

console.log(user(userStatus))

//QST 5  You have an array of destination objects, each with name, distance (in km), 
// and budgetRequired (in dollars). Write a function that accepts a maximum distance and a budget
//  and returns all destinations the user can afford and reach within that distance. If none are found,
//  return "No destinations available under your budget and distance"

