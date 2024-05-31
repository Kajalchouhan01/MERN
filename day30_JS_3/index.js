// const day = 1;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wedensday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid Input");
// }
let n = 496440
let digitSum = 0;

while(n>0){
    // let temp = Math.round(Math.floor(n % 10)); 
    let temp = n % 10; 
    digitSum += temp 
    n = Math.floor((n/10))
    console.log("remider = ", n)
}


console.log("sum = ",digitSum)