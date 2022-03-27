require('colors');
const {inquirerMenu, stop} = require('./helpers/inquirer');
const Todo = require('./models/todo');
const Todos = require('./models/todos');


console.clear();

const main = async() => {

    let opt = '';

    do {
        // opt = await inquirerMenu();
        // console.log('\n');
        const todos = new Todos();
        const todo = new Todo('Buy food');  

        todos._list[todo.id] = todo;

        console.log(todos);
        await stop();
    } while (opt !== '0');
};

main();