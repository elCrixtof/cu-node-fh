require('colors');

const {
    readInput, 
    inquirerMenu,
    stop
} = require('./helpers/inquirer');
const Searches = require('./models/searches');


const main = async () => {
    
    let choice;
    const searches = new Searches();

    do {

        choice = await inquirerMenu();

        switch ( choice ) {
            case 1:
                //Show message
                const place = await readInput('City:');
                await searches.city(place);
                //Show searches
                //Select place
                //Clima data
                //Show results
                console.log('\nPlace information\n'.green);
                console.log('City:',);
                console.log('Latitude:',);
                console.log('Longitude:',);
                console.log('Temperature:',);
                console.log('Minimum:',);
                console.log('Maximum:',);
                break;
            case 2:
                break;
            case 3: 
                break;
        }
        if ( choice !== 0 ) await stop();
    } while ( choice !== 0 );
}

main();