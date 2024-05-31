const num = [5,2,1,4,3]
num.sort((a,b)=>a-b);
console.log(num);
const num2 = [6,9,7,11,8,10]

num2.sort((a,b)=>a-b);
console.log(num2);
let combinearry = num.concat(num2);
console.log(combinearry);

combinearry.unshift(0);
console.log(combinearry);

combinearry.splice(3,7);
console.log(combinearry);
