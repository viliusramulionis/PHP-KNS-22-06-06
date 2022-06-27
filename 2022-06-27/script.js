let x = 10;
//Boolean kintajūjų reikšmės
x = true 
x = false
// x = true 

let skaicius = 10

// Boolean kintamojo tikrinimas
// if(x) {
//     console.log('Kintamasis egzistuoja')
// } 
// else {
//     console.log('Kintamasis tuščias')
// }

// Skaičių tikrinimas
// if(skaicius === 10) {
//     //console.log('Skaicius yra lygus dešimt')
// }

skaicius = 10

//Trys lygybės ženklai nurodo reikšmės ir tipo tikrinimą
//Du lygybės ženklai nurodo tik reikšmės tikrinimą

// if(skaicius == 10) {
//     console.log('Skaicius yra lygus dešimt')
// }

//Kondicinė logika nenaudojant riestinių skliaustų
//Jeigu kondicijoje bus naudojama tik viena eilute, riestiniai skliaustai yra nebūtini!!

// if(typeof skaicius === 'string') 
//     console.log('Kintamojo tipas yra stringas')
// else 
//     console.log('Kintamojo tipas nera stringas')

//Else if scenarijaus kūrimas
// if(typeof skaicius === 'string') 
//     console.log('Kintamojo tipas yra stringas')
// else if(typeof skaicius === 'number')
//     console.log('Kintamojo tipas yra skaicius')
// else 
//     console.log('Kintamojo tipas nerastas')

const vardas = 'Vilius'
const pavarde = 'Ramulionis'

let vardo_ilgis = vardas.length
let pavardes_ilgis = pavarde.length

// console.log(vardo_ilgis)
// console.log(pavardes_ilgis)

//Raskite ilgesnį stringą

// if(vardo_ilgis > pavardes_ilgis) {
//     console.log('Vardas yra ilgesnis nei pavardė')
// } else if(vardo_ilgis === pavardes_ilgis) {
//     console.log('Vardas ir pavardė yra vienodo ilgio')
// } else {
//     console.log('Pavarde yra ilgesnė nei vardas')
// }

//Pakeičia pačią pirmąją i raide I didžiąja
let modifikuotas_vardas = vardas.replace('i', 'I')

//Pakeičia visas i raides I didžiąsias
modifikuotas_vardas = vardas.replaceAll('i', 'I')

let modifikuota_pavarde = pavarde.replaceAll('i', 'I')

// console.log(modifikuotas_vardas)
// console.log(modifikuota_pavarde)

let stringas = 'Tekswa15awfd210awd8915' 

// stringas = stringas.replaceAll('0', '')
// stringas = stringas.replaceAll('1', '')
// stringas = stringas.replaceAll('2', '')
// stringas = stringas.replaceAll('3', '')
// stringas = stringas.replaceAll('4', '')
// stringas = stringas.replaceAll('5', '')
// stringas = stringas.replaceAll('6', '')
// stringas = stringas.replaceAll('7', '')
// stringas = stringas.replaceAll('8', '')
// stringas = stringas.replaceAll('9', '')

// console.log(stringas)

stringas = stringas.replaceAll(/(\d+)/g, '')

// Tekswaawfdawd
console.log(stringas)

// x = 2

// console.log(stringas.charAt(x))
// console.log(stringas[x])

//Raidžių konvertavimas į didžiąsias
// stringas = stringas.toUpperCase()
// console.log(stringas)

// //Raidžių konvertavimas į mažąsias raides
// stringas = stringas.toLowerCase()
// console.log(stringas)

if(!stringas.startsWith('Tek')) //Jeigu gauta reikšmė yra false
    console.log('Teisingai')

if(stringas.startsWith('Tek') !== false) //Jeigu reikšė yra bet kas tik, ne false
    console.log('Teisingai')

if(stringas.endsWith('awd'))
    console.log('Teisingai')


stringas = ' Lorem ipsum awd, test blah '
console.log(stringas)  
console.log(stringas.trim())
