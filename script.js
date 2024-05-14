const bar = document.getElementById('bar');
const close = document.getElementById('close')
const navElem = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',()=>{
        navElem.classList.add('active')
    })
}
    close.addEventListener('click',()=>{
        navElem.classList.remove('active')
    })