const express = require('express');
const app = express();
const config = require('./src/config');
const dbConnection = require("./src/database");
dbConnection();

app.get('/',function (req,res) {
    res.send('sad1');
});
app.listen(config.envConfig.port,function () {
    console.log(`server on port:${config.envConfig.port}`);
})
