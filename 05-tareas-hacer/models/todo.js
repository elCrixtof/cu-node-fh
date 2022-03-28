const { v4: uuidv4 } = require('uuid');
const todos = require('./todos');

class Todo {
    id = '';
    desc = '';
    dateCompleted = null;

    constructor (desc) {
        this.id = uuidv4();
        this.desc = desc;
        this.dateCompleted = null;
    }
}

module.exports = Todo;