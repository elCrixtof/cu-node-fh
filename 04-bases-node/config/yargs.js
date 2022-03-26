const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: `It's the base of multiplication table`
    })
    .option('t', {
        alias: 'to',
        type: 'number',
        default: 10,
        describe: `It defines the table's range`
    })
    .option('l', {
        alias: 'listing',
        type: 'boolean',
        default: false,
        describe: 'It shows the table in console'
    })
    .check((argv, options) => {
        if(isNaN(argv.b)) {
            throw 'The base must be a number';
        }
        return true;
    })
    .argv;

module.exports = argv;