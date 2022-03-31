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
                    latitude: element.center[0],
                    longitude: element.center[1]
                
            }));


        } catch (error) {
            return [];
        }

    }

}

module.exports = Searches;