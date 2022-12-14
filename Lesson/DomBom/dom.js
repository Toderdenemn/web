const date = new Date();

const year = date.getFullYear();
// 👇️ getMonth returns integer from 0(January) to 11(December)
const month = date.getMonth() + 1;
const day = date.getDate();

const withSlashes = [year, month, day].join('/');
console.log(withSlashes); // 👉️ 2022/10/25

document.getElementById('time').innerHTML=(withSlashes)
