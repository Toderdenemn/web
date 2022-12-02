// "hELLO wORLD"
const input = "Hello World"
let m = input.substring(1,6).toUpperCase();
let n = input.charAt(0).toLowerCase();
let d = input.substring(7,11).toUpperCase()
let c = input.charAt(6).toLowerCase();
let log = n+m+c+d

console.log(log)


// "tHIS iS string!"
const i = "This Is STRING!"
let q = i.charAt(0).toLowerCase();
let w = i.substring(1,4).toUpperCase();
let e = i.charAt(5).toLowerCase();
let r = i.charAt(6).toUpperCase();
let t = i.substring(8,15).toLocaleLowerCase()

console.log(q+w, e+r, t)