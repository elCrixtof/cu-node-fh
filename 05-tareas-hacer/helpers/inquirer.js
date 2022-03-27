require('colors');
const inquirer = require('inquirer');

const menuOpts = [
    {
        type: 'list',
        name: 'opt',
        message: 'Choose an option',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Create new todo`,
            },
            {
                value: '2',
                name: `${'2.'.green} Todo list`,
            },
            {
                value: '3',
                name: `${'3.'.green} Todo List complete`,
            },
            {
                value: '4',
                name: `${'4.'.green} Todo list to do `,
            },
            {
                value: '5',
                name: `${'5.'.green} To complete todo`,
            },
            {
                value: '6',
                name: `${'6.'.green} Delete todo`,
            },
            {
                value: '0',
                name: `${'0.'.green} Go out\n`,
            },
        ]
    }
]

const inquirerMenu = async() => {
    console.clear();
    console.log('====================='.green);
    console.log('  Choose an option'.green);
    console.log('=====================\n'.green);

    const {opt} = await inquirer
                        .prompt(menuOpts)
                        /*.then((answer) => {
                            console.log({answer});
                        })
                        .catch(err => console.log(err));*/

    return opt;
};



module.exports = {
    inquirerMenu
}