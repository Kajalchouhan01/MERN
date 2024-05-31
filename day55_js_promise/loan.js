let ramAlreadyMony = 200;
let loanAmount = 50;
let harsh = 100;

const loan = new Promise((resolve,reject)=>{
  let remainingAmount = harsh - loanAmount;
  if(remainingAmount>0){
    resolve({message:'bhai fir kb lage bolna',loanAmount});
    resolve(obj)
  }else{
    reject({message:'bhai av nhi de pauga'})
  }
})
// loan.then((res)=>console.log(res)).catch((err)=>console.log(err));
loan
.then((res) => {
  console.log(res.message);
  return res.loanAmount + ramAlreadyMony;
})
.then((res) =>
  console.log(`I started my own startup with harsh help now i have ${res} money `))
.catch((err) => console.log(err));

