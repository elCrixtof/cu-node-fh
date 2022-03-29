const fs = require('fs');
const filepath =  `./db/todo-list.json`;

const saveDB = (data) => {
    
    if (!fs.existsSync('./db')){
        fs.mkdirSync('./db');
    }

    fs.writeFileSync(filepath, JSON.stringify(data));  

};

const readDB = () => {
    if(!fs.existsSync(filepath)) {
        return null;
    }
    const data = JSON.parse(fs.readFileSync(filepath, {encoding: 'utf-8'}));
    return data;
};

module.exports = {
    saveDB,
    readDB
};