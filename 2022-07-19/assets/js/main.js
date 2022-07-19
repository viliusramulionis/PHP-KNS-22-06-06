let launched = false

const countUp = () => {
    if(launched)
        return 

    const count = document.querySelectorAll('.count')

    count.forEach((el) => {
        const max = el.dataset.digit
        let counter = 0

        let intervaloPavadinimas = setInterval(() => {
            counter += 50
            el.textContent = counter

            if(counter >= max)
                clearInterval(intervaloPavadinimas)
        }, 50)
    })
}

window.addEventListener('scroll', () => {
    const counter = document.querySelector('.countup')
    //window.innerHeight - grąžina naršyklės lango aukštį
    //window.innerWidth - grąžina naršyklės lango plotį
    //counter.offsetTop - grąžina elemento poziciją nuo dokumento viršaus
    //counter.offsetLeft - grąžina elemento poziciją nuo dokumento kairės pusės
    
    if(counter && (window.scrollY + window.innerHeight)  >= counter.offsetTop) {
        countUp()
        launched = true
    }

    const header = document.querySelector('header')
    
    if(header && window.scrollY > 30) {
        header.classList.add('background')
    }

    if(header && window.scrollY <= 30) {
        header.classList.remove('background')
    }
})

const playButtons = document.querySelectorAll('[data-action="toggle"]')

playButtons.forEach(el => {
    el.addEventListener('click', (event) => {
        event.preventDefault() //Sustabdo standartinius html veiksmus naršyklėje
        const href = event.target.getAttribute('href')

        document.querySelector(href).classList.toggle('show')
    })
})

const modalWindows = document.querySelectorAll('.modal')

modalWindows.forEach(el => {
    el.addEventListener('click', (event) => {
        event.target.classList.remove('show')
    })
})

window.addEventListener('keyup', (event) => {
    if(event.code === 'Escape') {
        modalWindows.forEach(el => {
            el.classList.remove('show')
        })
    }
})
