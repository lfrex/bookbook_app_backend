const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hi, loosers!")
})

app.listen(3000, () => {
    console.log("Bookbook backend up!");
})

