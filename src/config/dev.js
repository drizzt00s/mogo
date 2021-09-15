const devConfig = {
    port:process.env.PORT || 8080,
    database:'mongodb://localhost/development',
    secret:{API_KEY:process.env.API_KEY}
};
module.exports = devConfig;
