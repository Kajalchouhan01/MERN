// const arr = [10,20,30,40,"superman","spiderman",30.45,false]

//push => insert new element in the ending of array

// console.log("before =",arr)
// arr.push("batman")
// console.log("after = ",arr)

//pop => remove last element from array

// console.log("before =",arr)
// arr.pop()
// console.log("after = ",arr)

//unshift => add new element at begging of the array

// console.log("before =",arr)
// arr.unshift(2,3)
// console.log("after = ",arr)

//shift => remove begging element at begging from array

// console.log("before =",arr)

// while(arr.length !=0){
//     arr.shift();
// }
// console.log("after = ",arr) 


//splice
// console.log("before = ", arr);
// arr.splice(4,1)
// console.log("before = ", arr);


//slice 
// console.log("before = ", arr);
// arr.slice(4,1) not
// /console.log("after = ", arr);

//task
// console.log("before = ", arr);
// const result = arr.slice(4,7)
// console.log("after = ", result);

const salarydata = [
    {emp:1,salary:100,name:'superman'},
    {emp:2,salary:201,name:'bill gates'},
    {emp:3,salary:305,name:'elon musk'},
    {emp:4,salary:400,name:'mukesh ambani'},
    {emp:5,salary:815,name:'spiderman'},
    {emp:6,salary:600,name:'batman'},
    {emp:7,salary:723,name:'ironman'},
    {emp:8,salary:750,name:'thor'},
    {emp:9,salary:9089,name:'captain america'}
];

// const evenSalaryEmp = []
// for(let element of salarydata){
//     if(element.salary %2 ==0){  // if(element.salary > 300 && element,salary < 750)
//         evenSalaryEmp.push(element)
//         // console.log("even Salary array ",element);

       
//     }
// }
// console.log("even Salary array ",evenSalaryEmp)





let result = salarydata.slice(3,9)
console.log(result)

let salarySum  = 0

for(let element of result) salarySum += element.salary
console.log(salarySum)





