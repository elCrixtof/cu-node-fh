const http = require('http');

http.createServer((req, res) => {
    // console.log(req.rawHeaders);
    // console.log(req.url);
    // res.writeHead(200, {'Content-Type': 'text/plain'})
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    res.writeHead(200, {'Content-Type': 'application/csv'})
    
    const person = {
        id: 1,
        name: 'User1'
    }
    
    // res.write(JSON.stringify(person));
    res.write('id, nombre\n');
    res.write('1, fernando\n');
    res.write('2, chris\n');
    res.write('3, test\n');

    res.end();
})
.listen(8080);

console.log('Listening at the port:', 8080);
