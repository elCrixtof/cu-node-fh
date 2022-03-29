require('colors');
const {
    inquirerMenu, 
    stop, 
    readInput
} = require('./helpers/inquirer');
const Todos = require('./models/todos');
const {saveDB} = require('./helpers/saveFile')

const main = async() => {

    let opt = '';
    const todos = new Todos();

    // if(!fs.existsSync('./db/todo-list.txt')) {

    // }

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
                console.log(todos.listArr);
                break;
        }

        await stop();
    } while (opt !== '0');

    saveDB(todos.listArr);
};

main();