//1. f(x,y)=x`2 +y`2
let num1 = 3
let num2 = 4
f1(num1, num2)


function f1(x, y) {
    console.log

        (Math.pow(x, 2) + Math.pow(y, 2));
}

//17. factorial
// f(x) = x! => f(5) = 1 * 2 * 3 * 4 * 5;

function factorial(x) {
    let multiplication = 1;
    for (let i = 1; i <= x; i++) {
        multiplication = multiplication * i
    }
    console.log(multiplication);
}
factorial(5);

console.log('******************************')
//******************************************/

function f1(x, y) {
    console.log(Math.pow(x, 2) + Math.pow(y, 2))
}
f1(3, 4)

function f2(x) {
    console.log(Math.pow(x, e))
}
const e = Math.E
f2(2)

function f3(a, b) {
    console.log(Math.pow(a, 2) - Math.pow(b, 2))
}
f3(5, 4)

function f4(a, b) {
    console.log(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)))
}
f4(3, 4)

function f5(y) {
    console.log(Math.pow(y, 2) - 2 * y + 4)
}
f5(3)

function f6(a, b) {
    console.log(a - b * (Math.pow(a, 2) - Math.pow(b, 2)) - a)
}
f6(3, 5)

function f7(a, b) {
    console.log(2 * (a + b))
}
f7(2, 3)

function f8(a, b) {
    console.log(Math.pow(a + b, 2))
}
f8(2, 3)

function f9(a, b) {
    console.log(Math.pow(a, 2) - Math.pow(b, 2))
}
f9(2, 3)

function f10(a, b) {
    console.log(a * b)
}
f10(2, 3)

function f11(a, b) {
    console.log(3 * Math.pow((a + b), 2))
}
f11(2, 3)

function f12(x, y) {
    console.log(Math.pow(x, 3) - Math.pow(y, 3))
}
f12(2, 3)

function f13(a, b) {
    console.log(a / b)
}
f13(2, 3)

function f14(y) {
    console.log(Math.pow(y, 3) - 3 * Math.pow(y, 2) + 8)
}
f14(2, 3)

function f15(x, y) {
    console.log(Math.pow(1 / x, 2) - Math.pow(1 / y, 2))
}
f15(3, 4)

function f16(x, y) {
    console.log(Math.sqrt(Math.pow(x, 2) - Math.pow(y, 2)))
}
f16(5, 4)

function f17(x) {
    let mult = 1
    for (let i = 1; i <= x; i++) {
        mult = i
    }
    console.log(mult)
}
f17(5)

function f18(m) {
    const c = 300_000_000
    console.log(m * Math.pow(c, 2))
}
f18(2)

console.log('******************************')

function myFunction(p1, p2) {
    return p1 + p2;
}
myFunction(2, 3);

console.log(myFunction(2, 3));

console.log('******************************')

function myFunction(p1, p2) {
    const sum = p1 + p2;
    return p1 + p2;
}
myFunction(2, 3);

console.log(myFunction(2, 3));


console.log('******************************')

function isEven(number) {
    if (number % 2 == 0) {
        console.log("its even");
    } else {
        console.log('its odd')

    }
}
isEven(5);
isEven(4);
isEven(18)

console.log('******************************')

function isEven(number) {
    if (number % 2 == 0) {
        result = "its even";
    } else {
        result = 'its odd'

    }
    return result;
}
console.log(isEven(5))
isEven(5);
isEven(4);
isEven(18)
console.log('******************************')
let x = (a, b) => {
    if (a > b) {
        return a;
    } else {
        return b;

    }
}
console.log(x(30,87));
console.log('******************************')

debugger
let q = function (a, b) {
    if (a > b) {
        return a;
    } else {
        return b;

    }
}
console.log(q(30,87));