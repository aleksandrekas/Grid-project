const hamburger = document.querySelector('.hamburger-btn')
const line1 = document.querySelector('.lines1')
const line2 = document.querySelector('.lines2')
const line3= document.querySelector('.lines3')
const sidebar =document.querySelector('.mobile-list')


hamburger.addEventListener('click',()=>{
    line1.classList.toggle('top')
    line2.classList.toggle('mid')
    line3.classList.toggle('bot')
    sidebar.classList.toggle('show')
})