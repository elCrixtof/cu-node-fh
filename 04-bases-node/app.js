const {buildTableFile} = require('./helpers/multiplication')
const argv = require('yargs').argv;

console.clear();

console.log(process.argv);
console.log(argv);
console.log(argv.base);

// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');

// buildTableFile(base)
//     .then(fileName => console.log(`The file table-${fileName}.txt has been created`))
//     .catch(console.log)
