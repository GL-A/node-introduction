const express = require('express')
, bodyParser = require('body-parser')
, app = express()
, bc = require(__dirname + '/controller/books_controller');

app.use( bodyParser.json());
app.use( express.static( __dirname + "/../public/index.html"))

app.get('/api/books', bc.read)
app.get('/api/books/', bc.update)
app.post('/api/books', bc.create)

app.put('/api/books/:id', bc.update)

app.delete('/api/books/:id', bc.delete)


const port = 3000;

app.listen( port, () => { console.log('server running on port 3000')})
