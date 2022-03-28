require('colors');
const {inquirerMenu, stop, inNewTodo} = require('./helpers/inquirer');
const Todo = require('./models/todo');
const Todos = require('./models/todos');


console.clear();

const main = async() => {

    let opt = '';
    const todos = new Todos();

    do {
        opt = await inquirerMenu();
        console.log('\n');
        // todos._list[todo.id] = todo;
        // console.log(opt);
        switch(opt) {
            case '1':
                const input = await inNewTodo();
                console.log({input});
                const todo = new Todo(input);  
                todos._list[todo.id] = todo;     
                console.log(todos);   
                await stop();
                break; 
            default: 
                // console.log(`There isn't an option ${opt}`);
        }
        // await stop();
    } while (opt !== '0');
};

main();