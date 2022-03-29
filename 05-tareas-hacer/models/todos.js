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

    AllList () {
        this.listArr.forEach((todo, i) => {
            const idx = `${i+1}.`.green;
            const {desc, dateCompleted} = todo;
            const status = ( dateCompleted ) 
                                ? 'Completed'.green
                                : 'Pending'.red 

            console.log(`${idx} ${desc}\t :: ${status}`);
        })
    }

    completedTasksList(completed = true) {
        let count = 0;
        this.listArr.forEach((todo) => {
            const {desc, dateCompleted} = todo;
            const status = ( dateCompleted ) 
                            ? 'Completed'.green
                            : 'Pending'.red 

            if(completed && todo.dateCompleted !== null){
                count += 1;
                console.log(`${count}.`.green +` ${desc} :: ${dateCompleted}`);
            }

            if(!completed && todo.dateCompleted === null) {
                count += 1;
                console.log(`${count}.`.green +` ${desc} :: ${status}`);
            }
        })
    }

    deleteTask(id) {
        if(this._list[id]){
            delete this._list[id];
        }
    }
}

module.exports = Todos;