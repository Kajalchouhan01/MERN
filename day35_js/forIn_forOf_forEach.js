// const Marvel = {
//     movieName :'Infinity War',
//     release: 2017,
//     hero:'IronMan',
//     location:'NYC US',
//     stars:'5 starts'
// }
// for (let key in Marvel){
//     console.log(`${key}, ${Marvel[key]}`)
// }
let arr = [10,20,"superman","spiderman",20.345,true,false]
let i=0
// while( i < arr.length){
//     console.log(arr[i])
//     i++;
// }

// for(let element of arr){
//     console.log(element)
// }
arr.forEach((value,index,arr)=>console.log(index,value))
arr.forEach((value,index,arr)=>console.log(index,value+20))