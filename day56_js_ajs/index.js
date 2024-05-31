// console.log("we will be learning async awaid")

// setTimeout(() => {
//     console.log("This in soide set timeout function")}, 2000);

//     console.log("today is tuesday and time is 4.32")
    


// non blocking nature ...................this asynchronus

//  fetch data from api      ........              
const fetchDataFromAPI = async () =>{
    const api = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await api.json();
    console.log(data)
}
fetchDataFromAPI();
console.log("hello console")