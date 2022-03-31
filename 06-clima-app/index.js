require('dotenv').config();

const {
    readInput, 
    inquirerMenu,
    stop,
    placesMenu
} = require('./helpers/inquirer');
const Searches = require('./models/searches');

// console.log(process.env);

const main = async () => {
    
    let choice;
    const searches = new Searches();

    do {

        choice = await inquirerMenu();

        switch ( choice ) {
            case 1:
                //Show message
                const placeToSeek = await readInput('City:');
                const places = await searches.city(placeToSeek);
                //Show searches
                const placeSelected = await placesMenu(places);
                console.log(placeSelected);
                //Select place
                //Clima data
                //Show results
                console.log('\nPlace information\n'.green);
                console.log('City:', placeSelected.name);
                console.log('Latitude:', placeSelected.latitude);
                console.log('Longitude:', placeSelected.longitude);
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