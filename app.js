const form = document.querySelector('form');
const btn = document.querySelector('.btn')
const input = document.querySelector('input');
const span = document.querySelector('.email-span');

form.addEventListener('submit',()=>{
    window.location = 'endpage.html'
    const value = input.value;
    span.textContent = value
})