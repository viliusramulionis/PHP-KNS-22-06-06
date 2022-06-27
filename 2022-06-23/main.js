console.log('Veikia');
console.log("Veikia");
console.log(`Veikia`);

//variable - klasikinis kintamojo žymėjimas 
//var
//ESM kintamieji
// let
// const

//Kintamojo deklaravimas
let x = 10;
//Deklaruotas kintamasis nebūtinai gali turėti iš karto priskirtą reikšmę
let y;

console.log(x);

x = 20;

console.log(x);

x = x + 5;

console.log(x);

x += 10;

console.log(x);

x = x - 25;

console.log(x);

x -= 5;

console.log(x);

x = x * 3;

console.log(x);

x *= 5;

console.log(x);

x= x / 2;

console.log(x);

x /= 5;

console.log(x);

const z = 10;

//Eilute kuri sukuria klaidą, nes bandome pakeisti konstantos reikšmę
//z = 20;

//Kintamūjų tipai

x = 10 //Kintamojo tipas skaičius (number) 
console.log(typeof x); 
x = 'Kažkoks tekstas'; //Kintamojo tipas stringas (String)
console.log(typeof x);  
x = {} //Kintamojo tipas objektas (object)
console.log(typeof x);
x = [] //Kintamojo tipas masyvas (array)
console.log(typeof x); 

x = 'Teksto pradžia ';

let k = 'teksto pabaiga';

console.log(x, k);

x += k;

console.log(x);

x = x + ' dar pridėtas tekstas';

console.log(x);

x = 10;

console.log(x);

//Kintamūjų integravimas

const vardas = 'Vilius';
const pavarde = 'Ramulionis';

// Klasikinis stringų priskyrimas
// let zinute = 'Jūsų vardas yra: ' + vardas + ' ' + pavarde;

//Template literals zymejimas
let zinute = `Jūsų vardas yra: ${vardas} ${pavarde}`;

console.log(zinute);