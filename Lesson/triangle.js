const n = Number(prompt('n too oruulna uu'));

let result = ""

for (let i = 0; i < n; i++) {

    for (let j = 0; j < n - i - 1; j++) {
        result = result + " "
    }

    if (i === 0 || i === n - 1) {
        for (let j = 0; j < i + 1; j++) {
            result = result + "* ";
        }

    } else {
        for (let j=0; j<i+1; j++){
            if (j===0 || j===i){
                result = result + "* "
            }
            else{
                result=result + "  "
            }
        }

    }
    result = result + '\n'
}


console.log(result); 33