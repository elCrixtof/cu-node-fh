require('dotenv').config();
const express = require('express');
var hbs = require('hbs');


const app = express();
const PORT = process.env.PORT; 

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
//Serve content
app.use( express.static('public') );


//Routes
app.get('/', (req, res) => {
    res.render('home', {
        name: 'Fernando Herrera',
        title: 'Node curse',
        classNav: ''
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        name: 'Fernando Herrera',
        title: 'Node curse',
        classNav: 'alt'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        name: 'Fernando Herrera',
        title: 'Node curse',
        classNav: 'alt'
    })
})

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});
