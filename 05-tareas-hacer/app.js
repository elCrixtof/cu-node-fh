require('colors');
const {inquirerMenu, stop} = require('./helpers/inquirer');


console.clear();

const main = async() => {

    let opt = '';

    do {
        opt = await inquirerMenu();
        console.log('\n');
        await stop();
    } while (opt !== '0');
};

main();