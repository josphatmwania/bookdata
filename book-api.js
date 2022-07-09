// importing

const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const middlewareWrapper = require('cors');
const req = require('express/lib/request');
const res = require('express/lib/response');
const { response } = require('express');


const app = express();
const port = 3000;


// Where we will keep our books

let books = [];

// utilizing CORS
app.use(cors());



// Configuring body parser middlewareWrapper

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.post('/book', (req,response) => {
    const book = req.body;

    // output the book to the console for debugging
    console.log(book);
    books.push(book)


    // response.send('Book is added to the Database');


});




// Getting all the books endpoint

app.get('/books', (req, response) => {
    response.json(books);
});

// Deleting a book using isbn

app.delete('/book/:isbn', (req, res) => {
    // Reading isbn from the URL
    const isbn = req.params.isbn;

    // Remove item from the books array
    books = books.filter(i => {
        if (i.isbn !== isbn) {
            return true;
        }
        return false;
    });

    res.send('Book is deleted');
});


app.listen(port, () => console.log('Hello World, Listening on port ${port}!'))