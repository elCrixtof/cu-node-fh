const express = require('express');
const app = express();
const PORT = 8080; 

app.get('/', function (req, res) {
    res.send('Home page');
})

app.get('*', function (req, res) {
    res.send('Page not found');
})

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});
