// n gesen let deer promt-oor too avna
let n = prompt("Дурын тоогоо оруулна уу.."); 
// sum gesen let deer n-iig duudna
let sum = Number(n);
// herew sum.n 0-oos baga baiwal
if(0>sum){
    // console deer yu ch haruulahgui uchir.n 0-oos doosh too bhgui
    console.log();
} 
// tiim uchraas else zarlaad teren dotroo teg utgatai y,x gesen let zarlana
else{
    let y = 0;
    let x = 0;
    // let zaralsanii daraa while buyu davtamj zarlaad tuunii nuhtsliig
    // ugugdsun too.n y-s ih baiwal y let deer negiig nemeed y-gaa x deer nemne
    // ingesneer undsendee x let deer neg geneer nemegdseer sum buyu ugugdsun tootoi ijil toond hurhed
    // davtamj zogson console deer x let-g haruulna.
    while(y < sum){
        y = y+1;
        x = x+y;
    }
    console.log(`${x}`);

}


// let n = prompt("Дурын тоогоо оруулна уу.."); 
// let sum = Number(n);

// if(0>sum){
//     console.log();
// } 
// else{
//     let y = 0;
//     let x = 0;
//     while(y < sum){
//         y = y+1;
//         x = x+y;
//     }
//     console.log(`${x}`);
// }