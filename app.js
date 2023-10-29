const form = document.addEventListener('form');
const input = document.addEventListener('input');
const span = document.addEventListener('.email-span');

form.addEventListener('submit',()=>{
    window.location = 'endpage.html'
    const value = input.value;
    span.textContent = value;
})