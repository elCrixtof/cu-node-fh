const axios = require('axios');

class Searches {
    history = ['Tegucigalpa', 'Madrid', 'San José'];

    constructor() {
        //TODO: read DB if exists

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

}

module.exports = Searches;