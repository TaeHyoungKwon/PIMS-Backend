const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello, PIMS!");
});

app.get('/about', (req, res) => {
    res.send("Hello, About!");
});

app.listen(8080, () =>{
    console.log(`server is running on localhost:8080`);
});

