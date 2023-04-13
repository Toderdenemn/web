console.log("day 15 - array")
let f1 = "Lio";
let f2 = "Kou";
let f3 = "Var";
let f4 = "Upa";
let f5 = "Hem";
let f6 = "Tch";
let f7 = "Rab";
let f8 = "Dem";
let f9 = "Grl";
let f10 = "Mba";
let f11 = "Gir";
let france = ['lio', 'kou', 'Var', 'Upa', 'Hem', 'Tch', 'Rab', 'Dem','Grl','Mba','Gir']
console.log(france)
console.log(france[2])
france[2]="par"
console.log(france)

let p1 = "Lew";
let p2 = "Fra";
let p3 = "Szy";
let p4 = "Zie";
let p5 = "Kam";
let p6 = "Kry";
let p7 = "Ber";
let p8 = "Kiw";
let p9 = "Gil";
let p10 = "Cas";
let p11 = "Szc";
let poland = ['Lew', 'Fra', 'Szy', 'Zie', 'Kam', 'Kry', 'Ber', 'Kiw','Gil','Cas','Szc','Min']
console.log(poland)

for (let i=0; i<france.length; i++){
    console.log(france[i])
}
console.log('-------')

for (let i=0; i<11; i++){
    console.log(france[i])
}
console.log('-------')
for (let i=0; i<poland.length; i++){
    console.log(poland[i])
}

let evenNumbers = [1,2,3,5,10,11,3,5,8]
for (let i = 0; i < evenNumbers.length; i++){
    evenNumbers[i] = evenNumbers[i] + 4
}
console.log(evenNumbers)



let uNumbers = [1,2,3,5,10,11,3,5,8]
for ( let i = 0; i<uNumbers;){
    console.log(i)
    }





// console.log('___________________\n|     |     |     |\n|_____|_____|_____|\n|     |     |     |\n|_____|_____|_____|\n|     |     |     |\n|_____|_____|_____|')

let tiktak = [['x'],['o'],['x'], ['o'],['o'],['o'],['x'],['x'],['o']]
for(let i=0; i<tiktak.length; i++){
    for(let j=0; j<tiktak[0].length; j++){
        console.log(tiktak[i][j]);
    }
}


let data = [
    "Засгийн",
    "газарт",
    "6.4",
    "сая",
    "тонн",
    "нүүрс",
    "алдагдсан",
    "гэх",
    "мэдээлэл",
    "ирээгүй",
    "байна.",
    "Бодит",
    "байдалд",
    "ийм",
    "их",
    "хэмжээний",
    "нүүрс",
    "алдагдсан",
    "гэх",
    "асуудал",
    "эргэлзээтэй",
    "байна.",
    "Хууль",
    "хяналтын",
    "байгууллага",
    "хяналт",
    "шалгалтын",
    "ажил",
    "явуулж",
    "байна",
  ];
  let input = "байна";
  let num = 0;
  let count = 0;
  while (num < data.length) {
    if (data[num] == input) {
      count++;
    }
    num++;
  }
  
  console.log(count);



  