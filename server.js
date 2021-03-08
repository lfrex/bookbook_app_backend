const express = require('express');
const methodOverride = require('method-override');


const app = express();
const routes = require('./routes');

//Middleware
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.use('/books', routes.books);



app.listen(3000, () => {
    console.log("Bookbook backend up!");
})

