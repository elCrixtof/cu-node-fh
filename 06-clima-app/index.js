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
                //Select place
                const placeSelected = await placesMenu(places);
                if (placeSelected === '0') continue
                //Save on DB
                searches.addHistory(placeSelected.name);
                const weather = await searches.weather(placeSelected.latitude, placeSelected.longitude);
                //Show results
                console.log('\nPlace information\n'.green);
                console.log('City:', placeSelected.name.green);
                console.log('Latitude:', placeSelected.latitude);
                console.log('Longitude:', placeSelected.longitude);
                //Clima data
                console.log('Description:', weather.desc.yellow);
                console.log('Temperature:', weather.temp);
                console.log('Minimum:', weather.min);
                console.log('Maximum:', weather.max);
                break;
            case 2:
                console.log(searches.upperCaseHistory);
                searches.upperCaseHistory.forEach((element, i) => {
                    console.log(`${i+1}.`.green + ` ${element}`.green);
                })
                break;
        }
        if ( choice !== 0 ) await stop();
    } while ( choice !== 0 );
}

main();