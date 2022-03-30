require('colors');

const {
    readInput, 
    inquirerMenu,
    stop
} = require('./helpers/inquirer')


const main = async () => {
    
    let choice =  '';
    do {
        choice = await inquirerMenu();
        if ( choice !== 0 ) await stop();
    } while ( choice !== 0 );
}

main();