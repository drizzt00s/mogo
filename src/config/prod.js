const prodConfig = {
    port:process.env.PORT || 3000,
    database:process.env.database,
    secret:{API_KEY:process.env.API_KEY}
};
module.exports = prodConfig;
