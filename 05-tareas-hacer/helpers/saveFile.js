const fs = require('fs');
const saveDB = (data) => {
    
    if (!fs.existsSync('./db')){
        fs.mkdirSync('./db');
    }

    fs.writeFileSync(`./db/todo-list.json`, JSON.stringify(data));  

};

module.exports = {
    saveDB
};