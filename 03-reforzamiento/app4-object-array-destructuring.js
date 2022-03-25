/* Object and array destructuring */

const deadpool = {
    firstName: 'Wade',
    secondName: 'Winston',
    power: 'Regeneracion',

    getNombre: function () {
        console.log(`${this.firstName} ${this.secondName} ${this.power}`);
    }
};

deadpool.getNombre();

function printName( {firstName, secondName, power} ) {
    console.log(firstName, secondName, power);    
}
printName(deadpool);

const heroes = ['Wolfverine', 'Deadpool', 'Hulk'];
const [h1, h2, h3] = heroes;
console.log(h1, h2, h3);

// const firstName = deadpool.firstName;
// const secondName = deadpool.secondName;
// const power = deadpool.power;
// console.log(firstName);
// console.log(secondName);
// console.log(power);

// const {firstName, secondName, power} = deadpool;
// console.log(firstName, secondName, power);

// function printName( heroe ) {
//     const {firstName, secondName, power} = heroe;
//     console.log(firstName, secondName, power);    
// }