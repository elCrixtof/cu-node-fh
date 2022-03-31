const axios = require('axios');

class Searches {
    history = ['Tegucigalpa', 'Madrid', 'San José'];

    constructor() {
        //TODO: read DB if exists

    }

    get paramsMapbox() {
        return {
            access_token: 'pk.eyJ1IjoiZWxjcml4dG9mIiwiYSI6ImNsMWU5Z3JpZTBrcDkzanFjMWQ4bzJhYnoifQ.WalGHtinGdtvq2uHlITYtg',
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
            console.log(resp.data);

            return JSON.parse(resp.data);

        } catch (error) {
            return [];
        }

    }

}

module.exports = Searches;