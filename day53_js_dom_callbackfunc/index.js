// console.log("callback function")

// const print =(content,callback) =>{
//     console.log(content)
//     callback();
// }

// const print2 =() =>console.log("spiderman is belog from maevel")



// print("superman is belongs fromn dc",print2)


//next2
const print =(content,callback) =>{
    console.log(content)
    callback();
} 
const sbiROI =() => 7.9
const pnbROI =() => 6.9


const marksClc = (callback) =>{
    const result = callback();
    console.log("this is result ",result);
    
    let totalMarks = 0;
    let count = 0;
    for (let key in result) {
       totalMarks += result[key]
       count++;
    }
    return totalMarks/count;
}
const subjects = ()=>{
    const arr=
        {cpp:50,
        java:60,
        php:70,
        javascript:95,
        react:100
        };
    return arr;
};
console.log(marksClc(subjects));







