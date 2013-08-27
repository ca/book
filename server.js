var express = require('express'),
    books = require('./routes/books'),
    path = require('path'),
    http = require('http');

var app = express();

app.configure(function () {
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.static(path.join(__dirname, 'pub')));
});

app.get('/books', books.findAll);
app.get('/books/:id', books.findById);
app.post('/books', books.addBook);
app.put('/books/:id', books.updateBook);
app.delete('/books/:id', books.deleteBook);

app.listen(3000);
console.log('Listening on port 3000...');

http.createServer(app).listen(app.get('port'), function() {
    console.log('express server listening on 3000...');
});
