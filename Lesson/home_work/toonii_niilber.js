// n gesen let deer promt-oor too avna
let number = prompt("Дурын тоогоо оруулна уу.."); 
// herew number.n 0-oos baga baiwal
if(0>number){
    // console deer yu ch haruulahgui uchir.n 0-oos doosh too bhgui
    console.log();
} 
// tiim uchraas else zarlaad teren dotroo teg utgatai y,x gesen let zarlana
else{
    let y = 0;
    let x = 0;
    // let zaralsanii daraa while buyu davtamj zarlaad tuunii nuhtsliig
    // ugugdsun too.n y-s ih baiwal y let deer negiig nemeed y-gaa x deer nemne
    // ingesneer undsendee x let deer neg geneer nemegdseer number buyu ugugdsun tootoi ijil toond hurhed
    // davtamj zogson console deer x let-g haruulna.
    while(y < number){
        y = y+1;
        x = x+y;
    }
    console.log(x);

}


// let number = prompt("Дурын тоогоо оруулна уу.."); 
// if(0>number){
//     console.log();
// } 
// else{
//     let y = 0;
//     let x = 0;
//     while(y < number){
//         y = y+1;
//         x = x+y;
//     }
//     console.log(x);
// }