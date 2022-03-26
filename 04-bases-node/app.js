const { option } = require('yargs');
const {buildTableFile} = require('./helpers/multiplication')
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
    })
    .option('l', {
        alias: 'listing',
        type: 'boolean',
        demandOption: true,
        default: false    
    })
    .check((argv, options) => {
        if(isNaN(argv.b)) {
            throw 'The base must be a number';
        }
        return true;
    })
    .argv;

console.clear();

console.log(argv);
// console.log('base: yargs',argv.base);

// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');

buildTableFile(argv.b, argv.l)
    .then(fileName => console.log(`The file table-${fileName}.txt has been created`))
    .catch(console.log)
