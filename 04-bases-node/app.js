const {buildTableFile} = require('./helpers/multiplication')

console.clear();

let base = 3;

buildTableFile(base)
    .then(fileName => console.log(`The file table-${fileName}.txt has been created`))
    .catch(console.log)
