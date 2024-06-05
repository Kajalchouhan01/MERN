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
fetchdata("fruits");

document.querySelector("#btn1").addEventListener('click',()=>{fetchdata("apple")});
document.querySelector("#btn2").addEventListener('click',()=>{fetchdata("mango")});
document.querySelector("#btn3").addEventListener('click',()=>{fetchdata("grapes")});
document.querySelector("#btn4").addEventListener('click',()=>{fetchdata("cherrie")});
