/*
1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
"(XXX) XXX-XXXX". (10 taškų)

*/

//1 užduotis
console.log(`---1---`);
function did(a, b){
    if(a>b){
        return a;
    } else if (b>a){
        return b;
    } else {
        return ('lygus')
    }
}

console.log(did(5,8));

console.log(`---2---`);
for(i=0; i<10; i++){
    console.log(i+1);
}
console.log(`---3---`);
for(i=0; i<11; i+=2){
    console.log(i);
}
console.log(`---4---`);

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

for(i=0; i<10; i++){
    console.log(rand(1,10));
}
console.log(`---5---`);
let a = 0;
while(a !== 5){
    a=rand(1,10);
    console.log(a);
}


console.log(`---6---`);
    const mas = [...Array(rand(20,30))].map(_ => rand(10, 30));
    console.log(mas);
    let laik =0 ;
    mas.forEach((element)=>{
        if(laik< element){
            laik = element;
        }
    })
    console.log(`Didžiausias: ${laik}`);
console.log(`---7---`);

const ABC = 'ABCD';
let a7= 0;
let b7= 0;
let c7= 0;
let d7= 0;
const mas7 = [...Array(100)].map(_ => ABC[Math.floor(Math.random() * ABC.length)]);
console.log(mas7);
    for(let i7= 0; i7<mas7.length; i7++){
        if(mas7[i7] === 'A'){
            a7++;
        }else if(mas7[i7] === 'B'){
            b7++;
        }else if(mas7[i7] === 'C'){
            c7++;
        }else{
        d7++
    }
}
console.log(`A: ${a7}, B: ${b7}, C: ${c7},  D: ${d7} `);

console.log(`---8---`);
let sum8 = 0;
function lygineSuma(a,b){
    if(typeof a === 'number' && typeof b === 'number'){
        sum8 = a +b;
        if(sum8 % 2 === 0){
            return sum8;
        } else{
            return (`skaiciai nelyginiai`);
        }
    } else if(Array.isArray(a) && Array.isArray(b)) {
        sum8 = a.length +b.length;
        if(sum8 % 2 === 0){
            return sum8;
        } else{
            return (`skaiciai nelyginiai`);
        }
    } else {
        return (`Netinkamieji kintamieji`)
    }
}

console.log(lygineSuma([1,2],[1]));

console.log(`---9---`);
let isPrime =true;
function pirminisSkaicius(a9){
    if(typeof a === 'number'){
        // check if number is equal to 1
if (a9 > 1) {
    for (let i9 = 2; i9 < a9; i9++) {
        if (a9 % i9 == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        return (`skaicius pirminis`);
    } else {
        return (`skaicius nepirminis`);
    }
    } else {
          return (`skaicius nepirminis`)
        }

    } else {
      return (`Netinkama įvestis`);
    }
}

console.log(pirminisSkaicius(8));

console.log(`---10---`);

function telefonoNumeris(a){
    if(Array.isArray(a) && a.length === 10){
        for(let i = 0; i < a.length; i++){
            if (a[i] > 9){
                return (`Klaida negali buti masyve elementas daugiau nei 1 skaicius : ${a[i]}, pozicija ${i}`)
            }
        }
        return (`"(${a[0]}${a[1]}${a[2]}) ${a[3]}${a[4]}${a[5]}-${a[6]}${a[7]}${a[8]}${a[9]}"`)
    }
}

console.log(telefonoNumeris([8, 6, 5, 8, 6, 71, 8, 9, 3, 8]));