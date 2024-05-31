// const arr = [10,20,30,40,"superman","spiderman",30.45,false];

// // slice 
// console.log("before = ", arr);
// // arr.slice(4,1) not
// console.log("after = ", arr);
 
// const myslice = (start,end) => {
//     const temp =[];

//     for(let i=start; i<end; i++){
//       temp.push(arr[i])
//     }
//     return temp;
//  }
//  console.log(arr.slice(5,8))
//  console.log(myslice(5,8))

// const bollywood = ["pk","3-idiots","shadi me jaroor aana","12th fail"]
// const southIndian = ["Robort","salaar","bahubali","kgf","puspa"]
// const allMovies = bollywood.concat(southIndian)
// console.log(allMovies)

// arry searching method
  
// const phone = ["iphone","oneplue","realme","redmi","sony xperia","sumsang"]
// console.log(phone.indexOf('realme'))


// const phone = ["iphone","oneplue","realme","redmi","sony xperia","sumsang","realme","asus","blackbarry"]
// console.log(phone.lastIndexOf('realme'))

// sort

// const phone = ["iphone","oneplue","realme","redmi","sony xperia","sumsang","realme","asus","blackbarry"]
// console.log(phone.sort())

// const number = [94,3450,430,3130,53430,0,24340,567,6566,6568]

// console.log(number.sort((a,b)=>a-b))

const arr = [10,20,30,40,1,2,3,4,5,6,7,8,843,434,34,3,3,23,245,67];
const target = 245





// for(let i=0; i<arr.length;i++){
//    if(arr[i] == target ){
//       console.log("element found",i)
//       break;
//    }}





let i=0;
while (i< arr.length){
   if(arr[i] == target){
      console.log("element found",i);
      break;
   }
   i++;
}
if(i==arr.length){
   console.log("element not found")
}

   

