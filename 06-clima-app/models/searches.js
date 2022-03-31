const axios = require('axios');
const fs = require('fs');

class Searches {
    history = ['Tegucigalpa', 'Madrid', 'San José'];
    filepath =  `./db/places-list.json`;

    constructor() {
        //TODO: read DB if exists
        this.readDB();
    }

    get paramsMapbox() {
        return {
            access_token: process.env.MAPBOX_KEY,
            limit: '5',
            language: 'es'
        }
    }

    get paramsOpenWeather() {
        return {
            appid: process.env.OPENWEATHER_KEY,
            units: 'metric',
            lang: 'en'
        }
    }

    get upperCaseHistory () {
        return this.history.map(e => e.toLocaleUpperCase());
    }

    async city ( place = ''  ) {
        //Http request

        try { 
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json`,
                params: this.paramsMapbox
            });

            const resp = await instance.get();
            return resp.data.features.map((element)=>({
                    id: element.id,
                    name: element.place_name_es,
                    longitude: element.center[0],
                    latitude: element.center[1]
                
            }));


        } catch (error) {
            console.log(error);
        }

    }

    async weather (lat, lon) {
        try {
            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: {...this.paramsOpenWeather, lon, lat}
            })
            const resp = await instance.get();
            // console.log(resp.data);
            return {
                temp: resp.data.main.temp,
                min: resp.data.main.temp_min,
                max: resp.data.main.temp_max,
                desc: resp.data.weather[0].description
            }
        } catch (error) {
            console.log(error);
        }
    }

    addHistory (place = '') {
        //TODO: prevenir duplicados
        if(this.history.includes( place.toLocaleLowerCase() )) {
            return;
        }

        this.history = this.history.splice(0,5)

        this.history.unshift(place.toLocaleLowerCase());
        //Save in DB
        this.saveDB();
    }

    saveDB () {
        if (!fs.existsSync('./db')){
            fs.mkdirSync('./db');
        }

        const payload = {
            history: this.history
        }
    
        fs.writeFileSync(this.filepath, JSON.stringify(payload));  
    }

    readDB = () => {
        if(!fs.existsSync(this.filepath)) {
            return null;
        }
        this.history = JSON.parse(fs.readFileSync(this.filepath, {encoding: 'utf-8'})).history;
        
    };
}

module.exports = Searches;