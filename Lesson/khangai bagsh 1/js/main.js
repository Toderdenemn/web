let now = new Date();
console.log(now)

let startPCTime =new Date (0)
console.log(startPCTime)

let Dec31_1969 = new Date (-24*3600*1000)
console.log(Dec31_1969)

console.log(now.getHours())
console.log(now.getDate())

let tuesday = new Date();
console.log(tuesday)
let lastDayOf2022 = new Date('2022-12-31');
console.log(lastDayOf2022)

let a = tuesday.getDate()
let b = lastDayOf2022.getDate()

console.log(a)
console.log(b)

let c = tuesday.getHours()
let d = lastDayOf2022.getHours()

console.log(b-a)
console.log(d-c)

let q = tuesday.getMinutes()
let w = lastDayOf2022.getMinutes()
console.log(`Өнөөдрөөс шинэ он гартал ${b-a} өдөр ${c-d} цаг ${q-w} минут байна.`)

