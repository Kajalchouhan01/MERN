
// const div = document.querySelector(".container")
let fetchdata = async(cat) =>{
    let api = await fetch(`https://pixabay.com/api/?key=44204662-f5ad4868c7597364e48ffb4d0&q=${cat}&image_type=photo&pretty=true`);
    const data = await api.json();
    console.log(data.hits);

    const showData = document.querySelector(".show");

   showData.innerHTML = data.hits.map(
        (items) =>
          `<div >
        <img src=${items.largeImageURL}  alt="" style="width:280px"/>
    <p> ${items.tags}
     </p>
    </div>`
      ).join("");
};
fetchdata("America");

document.querySelector("#btn1").addEventListener('click',()=>{fetchdata("India")});
document.querySelector("#btn2").addEventListener('click',()=>{fetchdata("Chaina")});
document.querySelector("#btn3").addEventListener('click',()=>{fetchdata("Srilanka")});
document.querySelector("#btn4").addEventListener('click',()=>{fetchdata("Newyork")});
