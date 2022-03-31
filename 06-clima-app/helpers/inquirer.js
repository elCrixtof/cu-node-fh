require('colors');
const inquirer = require('inquirer');

const menuOpts = [
    {
        type: 'list',
        name: 'opt',
        message: 'Choose an option',
        choices: [
            {
                value: 1,
                name: `${'1.'.green} Seek city`,
            },
            {
                value: 2,
                name: `${'2.'.green} History`,
            },
            {
                value: 0,
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

const placesMenu = async(places) => {
    // {
    //     value: '1',
    //     name: `${'1.'.green} Add a task`,
    // },
    const choices = places.map((place, i) => {
        const idx = `${i+1}.`.green;
        return {
            value: place,
            name: `${idx} ${place.name}`
        }
    });

    choices.unshift({
        value: '0',
        name: '0.'.green + ' Cancelar'
    });

    const selectPlaceOpts = [
        {
            type: 'list',
            name: 'selectPlaceOpt',
            message: 'Choose a place to show',
            choices
        }
    ]
    
    // console.log(choices);
    const {selectPlaceOpt} = await inquirer.prompt(selectPlaceOpts);

    return selectPlaceOpt; 
};

const showChecklistMenu = async(todos) => {
    const choices = todos.map((todo, i) => {
        const idx = `${i+1}.`.green;
        return {
            value: todo.id,
            name: `${idx} ${todo.desc}`,
            checked: (todo.dateCompleted) ? true : false
        }
    });

    const checkOpts = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Choose tasks',
            choices
        }
    ]
    
    // console.log(choices);
    const {ids} = await inquirer.prompt(checkOpts);

    return ids; 
};


const confirm = async(message) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]

    const {ok} = await inquirer.prompt(question);
    return ok;
};

module.exports = {
    inquirerMenu,
    stop,
    readInput,
    placesMenu,
    confirm,
    showChecklistMenu
}