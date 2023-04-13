// object ni neg huwisagch dotor olon medeelel oruulah bolomjtoi
// object dotor davhar ocject uusgej bolno
// object dotor function orj bolno


/**Objects ni JSON gesen ug yum... JS Object Notation
 * 
 */
// jishee:
const bold = {
    name: 'Bold',
    age: 17,
    isMarried: true,
    mangar: 'tiim',
    eruulMend: {
        teneg: 'tiim',
    }
}
console.log(bold)


// object clone hiij bolno

let bat = {...bold};

console.log(bat)

const boldString = JSON.stringify(bold, null, 4);
console.log(boldString)



// object-oos zuwhun utguudiig avah bol....:
console.log(Object.values(bold))


// object merge hiih
// herw niiluulj bgaa objectuudiin key dawhardsan tohioldold log deer suuld bichigdsen.n darj bichne
//jishee.n doorh tohioldold address-n key bichigdne gesen ug
const address ={
    city: "UB",
    country: "mongolia",

}
console.log(Object.assign(bold, address))