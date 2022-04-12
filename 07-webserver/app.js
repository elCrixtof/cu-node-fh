const express = require('express');
const app = express();
const PORT = 8080; 

//Serve content
app.use( express.static('public') );

app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html')
})

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html')
})

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});
