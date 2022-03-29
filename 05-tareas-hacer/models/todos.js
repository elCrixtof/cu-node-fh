/*
    _istado: 
    {'uuid-12312-1234-5645': {id: 12, desc: 'asdasasdas', dateCompleted}}
    {'uuid-12312-1234-5645': {id: 12, desc: 'asdasasdas', dateCompleted}}
    {'uuid-12312-1234-5645': {id: 12, desc: 'asdasasdas', dateCompleted}}
*/
const Todo = require('./todo');

class Todos {
    _list = {};

    get listArr(){
        const list = [];
        Object.keys(this._list).forEach((key) => {
            list.push(this._list[key]);
        });

        return list;
    }

    constructor() {
        this._list = {};
    }

    createTodo(desc = ''){
        const todo = new Todo(desc);
        this._list[todo.id] = todo;
    }

    loadData (data = []) {
        data.forEach((element) => {
            const todo = new Todo(element.desc);
            todo.desc = element.desc
            todo.dateCompleted = element.dateCompleted
            this._list[todo.id] = todo;
        });
    }
}

module.exports = Todos;