// const mySalary = (inhand,callback) =>{
    
    
//     const result = callback();
   
    
//     console.log("this is result ",result);
    
//     let totaltax = 0;
//     let count = 0;
//     for (let key in result) {
//        totaltax += result[key]
//        count++;
//     }
//     return totaltax/100;
// }

// const  tax = ()=>{
//     const arr=
//         {GST : 5.5,
//         ITR: 2.3,
//         Homelone:8.9,
//         eductionLone: 9.2,
//         iPhonelone :10.2,

//         };
//     return arr;
// };
// console.log( mySalary(tax));


const mysal = (inhand,callback)=>{
    const result = callback()
    console.log(result);
    let totalpercentage = 0;
    for (let key in result) {
        totalpercentage += result[key]
    }
    deducSal = (inhand*totalpercentage)/100;
    remainSal = inhand - deducSal;
    console.log("Remaining Salary",remainSal);
}
const deduction = ()=>{
    const tax={
        gst:5.5,
        itr:2.3,
        homeLoan:8.9,
        eduLoan:9.2,
        iphoneLoan:10.2
    }
    return tax;
}
mysal('100000',deduction) 