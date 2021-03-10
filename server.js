const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const routes = require('./routes');


const corsOptions = {
    origin: ['http://localhost:3000'],
    methods: "GET,POST,PUT,DELETE",
    credentials: true, //allows session cookies to be sent back and forth
    optionsSuccessStatus: 200 //legacy browsers
  }

app.use(cors(corsOptions))
app.use(bodyParser.json());

//Middleware
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.use('/books', routes.books);
app.use('/users', routes.users);



app.listen(3001, () => {
    console.log("Bookbook backend up!");
})

