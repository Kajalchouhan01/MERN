// console.log("")
const h1 = document.querySelector('h1')
h1.innerText = window.innerWidth;
h1.innerText = window.innerHeight;

document.querySelector('#dark').addEventListener('click',() =>{ 
    
    document.body.style.backgrondcolor ='black'
document.body.style.color ='white';
if(confirm("you are redirect to amazon")){
    location.assign("https://www.google.com");
}


});

document.querySelector('#light').addEventListener('click',() =>{ 
    
    document.body.style.backgrondcolor ='white'
document.body.style.color ='black';

if(confirm("you are redirect to amazon")){
    location.assign("https://www.amazon.com");
}

});