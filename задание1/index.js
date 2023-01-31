let btn = document.querySelector('.zhmyak');
let svg =document.querySelectorAll('svg')
btn.addEventListener('click', () =>{
  svg[0].classList.toggle('vis');
  svg[1].classList.toggle('vis');
})
