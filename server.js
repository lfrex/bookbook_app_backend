require('dotenv').config();

const express = require('express');
// const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const routes = require('./routes');
// const constants = require('./constants');


const corsOptions = {
    origin: ['http://localhost:3000' || "https://bookbackend-app.herokuapp.com"], //Change for liink to FrontEnd in surge app.
    methods: "GET,POST,PUT,DELETE",
    credentials: true, //allows session cookies to be sent back and forth
    optionsSuccessStatus: 200 //legacy browsers
  }

app.use(cors(corsOptions))
app.use(bodyParser.json());

//Middleware
// app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
// app.use(methodOverride('_method'));

app.use('/book', routes.book);
app.use('/user', routes.user);
// app.use("/testAPI", routes.testAPI);



app.listen(process.env.PORT, () => {
    console.log("Bookbook backend up!");
})

