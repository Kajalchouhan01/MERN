const div = document.querySelector(".container")
let fetchdata = async(category) =>{
    let api = await fetch(`https://pixabay.com/api/?key=44204662-f5ad4868c7597364e48ffb4d0&q=${category} &image_type=photo&pretty=true`);
    api = await api.json();
    console.log(api.hits);
    document.querySelector(".box").innerHTML = api.hits.map(
        (item) =>
          `<div class="image">
        <img src=${item.largeImageURL}  alt="" style="width:280px">
    <p> ${item.tags}
     </p>
    </div>`
      ).join("");
}
fetchdata()
  
  fetchdata("america");
  
  document.querySelector('#btn1').addEventListener('click',()=>{
      fetchdata("india")
  })
  
  document.querySelector("#btn2").addEventListener("click", () => {
    fetchdata("canadia");
  });
  
  document.querySelector("#btn3").addEventListener("click", () => {
    fetchdata("newyork");
  });
  
  document.querySelector("#btn4").addEventListener("click", () => {
    fetchdata("america");
  });