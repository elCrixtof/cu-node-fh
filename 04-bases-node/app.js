const {buildTableFile} = require('./helpers/multiplication')
const argv = require('./config/yargs');

console.clear();
console.log(argv);
// console.log('base: yargs',argv.base);

// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');

buildTableFile(argv.b, argv.t, argv.l)
    .then(fileName => console.log(`The file table-${fileName}.txt has been created`.brightGreen))
    .catch(console.log)
