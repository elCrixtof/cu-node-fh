require('colors');

const showMenu = () => {
    return new Promise((resolve) => {

        console.clear()
        console.log('====================='.green);
        console.log('  Choose an option'.green);
        console.log('=====================\n'.green);
        console.log(`${'1.'.green} Create new todo`),
        console.log(`${'2.'.green} Todo list`),
        console.log(`${'3.'.green} Todo List complete`),
        console.log(`${'4.'.green} Todo list to do `),
        console.log(`${'5.'.green} To complete todo`),
        console.log(`${'6.'.green} Delete todo`),
        console.log(`${'0.'.green} Go out\n`)

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Choose an option: ', (opt) => {
            readline.close();
            resolve(opt);
        });
    });
};

const pause = () => {
    return new Promise ((resolve) => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`\nPush ${'Enter'.green} to continue\n`, (opt) => {
            readline.close();
            resolve(opt);
        });
    });
}

module.exports = {
    showMenu,
    pause
};