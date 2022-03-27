require('colors');
const inquirer = require('inquirer');

const inquirerMenu = () => {
    console.clear();
    console.log('====================='.green);
    console.log('  Choose an option'.green);
    console.log('=====================\n'.green);

    await inquirer.
    prompt([{
        type: 'list',
        name: 'Main',
        message: 'Choose an option',
        choices: [
            `${'1.'.green} Create new todo`,
            `${'2.'.green} Todo list`,
            `${'3.'.green} Todo List complete`,
            `${'4.'.green} Todo list to do `,
            `${'5.'.green} To complete todo`,
            `${'6.'.green} Delete todo`,
            `${'0.'.green} Go out\n`,
        ]
    }])
    .then((answer) => {
        console.log({answer});
    })
    .catch(err => console.log(err));

}

module.exports = {
    inquirerMenu
}