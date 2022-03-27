require('colors');

const showMenu = () => {
    return new Promise((resolve) => {
        console.clear()
        console.log('====================='.green);
        console.log('  Choose an option'.green);
        console.log('=====================\n'.green);

        console.log(`${'1.'.green} Add a task`);
        console.log(`${'2.'.green} Todo list`);
        console.log(`${'3.'.green} Todo list mark as complete`);
        console.log(`${'4.'.green} Todo list mark as pending`);
        console.log(`${'5.'.green} Mark a todo(tasks) as complete`);
        console.log(`${'6.'.green} Delete task`);
        console.log(`${'0.'.green} Quit\n`);

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