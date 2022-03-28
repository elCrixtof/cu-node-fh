/*
    _istado: 
    {'uuid-12312-1234-5645': {id: 12, desc: 'asdasasdas', dateCompleted}}
    {'uuid-12312-1234-5645': {id: 12, desc: 'asdasasdas', dateCompleted}}
    {'uuid-12312-1234-5645': {id: 12, desc: 'asdasasdas', dateCompleted}}
*/
const Todo = require('./todo');

class Todos {
    _list = {};

    constructor() {
        this._list = {};
    }

    createTodo(desc = ''){
        const todo = new Todo(desc);
        this._list[todo.id] = todo;
    }
}

module.exports = Todos;