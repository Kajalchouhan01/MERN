const element = document.querySelector('section')
// console.log(element.firstElementChild.innerText)
console.log(element.children.length)

for(let i=0; i<element.children.length; i++){
    element.children[i].style.backgroundColor = 'gray'
    element.children[i].style.margin = '10px'
    element.children[i].style.padding = '10px'
}
element.previousElementSibling.style.backgroundColor ='red'
console.log(element.previousElementSibling)

