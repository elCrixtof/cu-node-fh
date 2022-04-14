const express = require('express');
const cors = require('cors');

class Server {
    
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // Middlewares
        this.middlewares();
        // Routes 

        this.routes();
    }

    middlewares () {
        // CORS
        this.app.use(cors())
        // Public directory
        this.app.use(express.static('public'));
        
    }

    routes () {
        this.app.get('/test-path', (req, res) => {
            res.json({
                msg: 'get API'
            })
        });

        this.app.put('/test-path', (req, res) => {
            res.json({
                msg: 'put API'
            })
        });

        this.app.post('/test-path', (req, res) => {
            res.json({
                msg: 'post API'
            })
        });

        this.app.delete('/test-path', (req, res) => {
            res.json({
                msg: 'delete API'
            })
        });

        this.app.use('*', (req, res) => {
            res.send('404 | page not found')
        });
    }

    listen () {
        this.app.listen(this.port, () => {
            console.log('Server runs at the port', this.port);
        })
    }

}

module.exports = Server;