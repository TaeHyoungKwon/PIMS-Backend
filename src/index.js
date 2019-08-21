const db = require('./models');

const express = require('express');

const app = express();

db.sequelize.sync().then(() => {
    console.log('DB connection success.');
    console.log('Press CTRL-C to stop\n')
}).catch(err => {
    console.error(err);
    console.log('DB connection Error');
    process.exit();
    });

app.get('/', (req, res)=> {
    res.send("Hello, Server");
})

app.listen(8080, ()=> {
   console.log('server is running on localhost:8080')
});