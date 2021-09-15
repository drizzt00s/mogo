const mongoose = require('mongoose');
const config = require('./config/index');

const databaseConnection = function(){
    // return mongoose.connect('mongodb://localhost/express-app-dev')
    //     .then(function(){
    //         console.log('mongodb connected')
    //     })
    //     .catch(function () {
    //         console.log('mongodb failed')
    //     })

    mongoose.connect(config.envConfig.database,function (err) {
        if(err){
            console.log('mongodb connect error');
        }
        console.log('mongodb connected')
    })
};

module.exports = databaseConnection;
