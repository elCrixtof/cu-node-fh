require('colors');
const inquirer = require('inquirer');
const Todo = require('../models/todo');

const menuOpts = [
    {
        type: 'list',
        name: 'opt',
        message: 'Choose an option',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Add a task`,
            },
            {
                value: '2',
                name: `${'2.'.green} Todo list`,
            },
            {
                value: '3',
                name: `${'3.'.green} Todo list mark as complete`,
            },
            {
                value: '4',
                name: `${'4.'.green} Todo list mark as pending`,
            },
            {
                value: '5',
                name: `${'5.'.green} Mark a todo(tasks) as complete`,
            },
            {
                value: '6',
                name: `${'6.'.green} Delete task`,
            },
            {
                value: '0',
                name: `${'0.'.green} Quit\n`,
            },
        ]
    }
]

const pause = [
    {
        type: 'input',
        name: 'enter',
        message: 'Push ' + 'Enter '.green + 'to continue',
    }
]

const newTodo = [
    {
        type: 'input',
        name: 'salida',
        message: 'Write new todo to'.green,
        resultado (answer) {
            return answer
        }
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

const stop = async() => {
    const {enter} = await inquirer.prompt(pause);
    return enter;
};

const inNewTodo = async() => {
    console.clear();
    const {salida} = await inquirer.prompt(newTodo);
    return salida;
}

module.exports = {
    inquirerMenu,
    stop,
    inNewTodo
}