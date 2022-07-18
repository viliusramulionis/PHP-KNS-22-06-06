const root = document.getElementById('root')

const handleClick = (event) => {
    console.log('Paspaudimas')
}

const handleChange = () => {
    console.log('Keičiasi reikšmė')
}

const handleFocus = () => {
    console.log('Bandymas keisti')
}

const handleKeyDown = (event) => {
    if(event.key === 'Enter')
        console.log('You have entered the matrix')
}

const handleKeyUp = (event) => {
    if(event.key === 'Enter')
        console.log('You have exited the matrix')
}

const handleMouseOver = () => {
    console.log('Užvedimas su pele')
}

const handleMouseOut = () => {
    console.log('Pelė paliko elementą')
}

//Įvykio priskyrimas naudojant html atributą
//root.innerHTML += '<div onclick="handleClick()">Mygtukas</div>'

root.innerHTML += '<button class="mygtukas">Mygtukas</button>'

const mygtukas = root.querySelector('.mygtukas')

//DOM savybės modifikavimas priskiriant naują reikšmę
mygtukas.onclick = () => {
    console.log('DOM objekto modifikavimo būdas')
}

//Populiariausias būdas priskirti įvykiams
mygtukas.addEventListener('click', handleClick)

//Change įvykis
root.innerHTML += '<div class="m-2"><input type="text" /></div>'

//Paspaudus ant tekstinio laukelio
root.querySelector('input[type="text"]').addEventListener('focus', handleFocus)
//Pakeitus tekstinio laukelio reikšmę
root.querySelector('input[type="text"]').addEventListener('change', handleChange)

//Įvykis paspaudus mygtuką
window.addEventListener('keydown', handleKeyDown)
//Įvykis atleidus mygtuką
window.addEventListener('keyup', handleKeyUp)

//Hover
root.innerHTML += '<div class="m-2 box"></div>'

const box = document.querySelector('.box')

//Įvykis užvedus su pele
box.addEventListener('mouseover', handleMouseOver)
//Įvykis patraukus pelę
box.addEventListener('mouseout', handleMouseOut)

//Lango aukščio arba pločio keitimo įvykis
window.addEventListener('resize', () => {
    //Naršyklės pločio grąžinimas
    //console.log('Lango plotis: ', window.innerWidth)
    //Naršyklės aukščio grąžinimas
    //console.log('Lango aukštis: ', window.innerHeight)

    if(window.innerWidth > 450)
        document.querySelector('body').style.background = '#000'
    else 
        document.querySelector('body').style.background = 'purple'
})

//Elemento sukūrimas dom'e
const image = document.createElement('img')
//Elemento modifikavimas dom'e
image.setAttribute('src', 'assets/img/1095230.jpg')
image.addEventListener('load', () => {
    //console.log('Nuotrauka užkrauta')
})

root.appendChild(image)

// const handleLoaded = () => {
//     console.log('Nuotrauka užkrauta')
// }

// root.innerHTML += '<img src="assets/img/1095230.jpg" onload="handleLoaded()">'

//
window.addEventListener('scroll', (event) => {
    console.log('Važiavimas naudojant slankmatį')
    //Box elemento pozicija
    console.log('Box elemento viršutinė pozicija: ', box.offsetTop)
    console.log('Box elemento kairinė pozicija: ', box.offsetLeft)
    
    console.log('Window elemento viršutinė pasislinkimo pozicija: ', window.scrollY)
    console.log('Window elemento kairinė pasislinkimo pozicija: ', window.scrollX)
})

