const img = document.querySelector('img')
const h1 = document.querySelector('h1')
setInterval(() => {
    h1.innerText = "nature2";
    img.src = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2016%2F09%2F07%2F11%2F37%2Fsunset-1651426_1440_2560.jpg&tbnid=YbqtL2nliSMtUM&vet=12ahUKEwjD09XO_pGGAxXn6KACHQjUB5sQMygGegUIARCCAQ..i&imgrefurl=https%3A%2F%2Fpixabay.com%2Fusers%2Fthedigitalartist-202249%2F&docid=bUYzdb4fNIPVrM&w=1440&h=821&q=pixabay%20images&ved=2ahUKEwjD09XO_pGGAxXn6KACHQjUB5sQMygGegUIARCCAQ" 
},1000) 

setInterval(() => {
    h1.innerText = "water";
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8IKnWvdCbAJt3oI_GmBVKOaHOBVCWfkO44A&usqp=CAU"
},2000)
setInterval(() => {
    h1.innerText ="moutain";
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCiqCsQcp07f9a3WSbxSoaS-R1sn_eJPbwTg&usqp=CAU"
},3000)
setInterval(() => {
    h1.innerText ="cloud";
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLqCN5RWFWghYUODRGa6jfye3HfZOfsiqRIA&usqp=CAU"
},4000)
setInterval(() => {
    h1.innerText ="road";
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyp28l4IgrODgYaCgWh65adISLJK_VDwRBQg&usqp=CAU"
},5000)