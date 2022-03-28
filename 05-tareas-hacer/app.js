require('colors');
const {
    inquirerMenu, 
    stop, 
    readInput
} = require('./helpers/inquirer');
const Todos = require('./models/todos');

const main = async() => {

    let opt = '';
    const todos = new Todos();

    do {
        opt = await inquirerMenu();
        if (opt !== '0') {
            console.log('\n');
        }

        switch(opt) {
            case '1':
                const input = await readInput('Set description for task:');
                todos.createTodo(input);
                break; 
            case '2':
                console.log(todos);   
                break;
        }

        await stop();
    } while (opt !== '0');
};

main();