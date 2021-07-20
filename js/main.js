let burger = document.querySelector('#burger');
let menu = document.querySelector('.header-menu');
let mask = document.querySelector('.mask');
let links = document.querySelectorAll('a');
burger.addEventListener('click', () => {
    menu.classList.toggle('open')
    mask.classList.toggle('open')
    burger.classList.toggle('open')
    document.body.classList.toggle('open')
})
mask.addEventListener('click', () => {
    menu.classList.toggle('open')
    mask.classList.toggle('open')
    burger.classList.toggle('open')
    document.body.classList.toggle('open')
})
links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('open')
        mask.classList.remove('open')
        burger.classList.remove('open')
        document.body.classList.remove('open')
    })
})