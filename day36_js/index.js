// const arr = [10,20,30,40,"superman","spiderman","facebook","google",10.23,40.23,true, false,'a','z','b']

// console.log(arr)

const movies = [
    {title:'Ra.one',Actor:'SRK',release:'2012',Hit:false,FLOP:true},
    {title:'infinity war',Actor:'rdj',release:'2018',Hit:true,FLOP:true},
    {title:'Dhoom',Actor:'amir khan',release:'2013',Hit:true,FLOP:false},
    {title:'Ra.one',Actor:'SRK',release:'2012',Hit:true,FLOP:false}
]
// console.log(movies.length)

// for(let i=0; i<movies.length; i++){
//     console.log(movies[i].title)
// }

// for(let i=0; i<movies.length; i++){
//     console.log(movies[i].title, movies[i].Actor)
// }
 
for (let element in   movies) {
        console.log(element, movies[element] )
    }

// movies.forEach((value,index)=>console.log(value,index))


