require('colors');
const {
    inquirerMenu, 
    stop, 
    readInput,
    deleteMenu
} = require('./helpers/inquirer');
const {
    saveDB,
    readDB
} = require('./helpers/saveFile')
const Todos = require('./models/todos');

const main = async() => {

    let opt = '';
    const todos = new Todos();

    const data = readDB();
    if(data) {
        todos.loadData(data);
    }

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
                todos.AllList();
                break;
            case '3':
                todos.completedTasksList();
                break;
            case '4':
                todos.completedTasksList(false);
                break;
            case '5':
                break;
            case '6':
                const id = await deleteMenu(todos.listArr);
                console.log(id);
                break;
        }

        await stop();
    } while (opt !== '0');

    saveDB(todos.listArr);
};

main();