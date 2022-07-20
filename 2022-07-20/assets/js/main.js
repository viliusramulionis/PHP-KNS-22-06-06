window.addEventListener('scroll', () => {
    const header = document.querySelector('header')
    
    if(header && window.scrollY > 30) {
        header.classList.add('background')
    }

    if(header && window.scrollY <= 30) {
        header.classList.remove('background')
    }
})

document.querySelector('a.menu').addEventListener('click', (event) => {
    event.currentTarget.parentElement.classList.toggle('active')

    //event.currentTarget.closest('nav') //Grąžina artimiausią elementą šalia esančio
})