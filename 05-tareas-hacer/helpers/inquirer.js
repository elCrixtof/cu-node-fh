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
                name: `${'0.'.green} Quit`,
            }
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

const inquirerMenu = async() => {
    console.clear();
    console.log('==============================='.green);
    console.log('  Choose an option');
    console.log('===============================\n'.green);

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

const readInput = async(message) => {
    const inputSet = [
        {
            type: 'input',
            name: 'input',
            message,
            validate(value) {
                if(value.length === 0) {
                    return 'Please, set a value';
                }
                return true;
            }
        }
    ]

    // console.clear();
    const {input} = await inquirer.prompt(inputSet);
    return input;
}

const deleteMenu = async(todos) => {
    // {
    //     value: '1',
    //     name: `${'1.'.green} Add a task`,
    // },
    const choices = todos.map((todo, i) => {
        const idx = `${i+1}.`.green;
        return {
            value: todo.id,
            name: `${idx} ${todo.desc}`
        }
    });

    const deleteOpts = [
        {
            type: 'list',
            name: 'deleteOpt',
            message: 'Choose a task to delete',
            choices
        }
    ]
    
    // console.log(choices);
    const {deleteOpt} = await inquirer.prompt(deleteOpts);

    return deleteOpt; 
}

module.exports = {
    inquirerMenu,
    stop,
    readInput,
    deleteMenu
}