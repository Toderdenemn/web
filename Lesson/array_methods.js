// array at.n buleglesen utgaas hasah utga buyu hoinoos.n songoj boldog
const a= [12,43,53,65,23,54]
console.log(a.at(-2))

// array concat
const b= [23,43];
const c= b.concat(a);

console.log(a)
console.log(b)
console.log(c)

// includes---- sudlaarai

// indexof-- search sudlaarai

// Join--- sudlaarai 
console.log(a.join('-'));

// split-g sudlaarai

// Pop---- suuliinhiig.n ustgadag


// jishee:
console.log('test.png'.split('.').pop())

// push: array-n buleg dotoro utga nemj bolno gehdee ard.n
a.push(2323)
console.log(a)

// shift bolon unshift gewel array-n bulegt urdaas.n nemj hasaj bolno

// sort: array-n buleg dotorhiig bolon buguudiig sortloh

console.log (a.sort(function(a,b){
    if(a>b){
        return -1;
    } else{
        return 1
    }
}));



console.log(['bold','bat','mangar','zoloo'].sort(function(a,b){
    if (a.toUpperCase()<b.toUpperCase()){
        return -1;
    } else{
        return 1;
    }
}))


console.log('0, 1, 1, 2, 3, 5, 8, 13')