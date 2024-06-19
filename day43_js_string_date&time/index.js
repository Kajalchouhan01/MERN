// date and time 
// const date 
// = new Date();
// console.log("this is current date ",date)

// const date = new Date();

// const month = date.getMonth();
// const D = date.getDate();
// const day = date.getDay();
// const hour = date.getHours();
// const minut = date.getMinutes();
// const second = date.getSeconds();
// const millisecond = date.getMilliseconds();
// const year = date.getFullYear();

// console.log("...................date...............")
// // console.log(`${day}-${month}-${year}`)


// console.log(".........time............")
// console.log(`${hour}:${minut}:${second}:${millisecond}`)


// set timeout
// console.log("settimeout")
// setTimeout(()=>{console.log("inside settimeout")},2000)

// setintervel
// console.log("setintervel")
// setInterval(()=>{console.log("inside settimeout")},1000)

setInterval(() =>{
    const date = new Date();

    const hour = date.getHours();
    const minut = date.getMinutes();
    const second = date.getSeconds();
    const millisecond = date.getMilliseconds();
    document.querySelector('h1'.innerHTML = `${hour}:${minut}:${second}`)
    
},1000);
console.log("setIntervel")

    
