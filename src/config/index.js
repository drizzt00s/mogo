process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const env = process.env.NODE_ENV;
const devConfig = require('./dev');
const prodConfig = require('./prod');
const baseConfig = {
    secret:{}
};

let envConfig = null;

switch (env){
    case 'development':
    case 'dev':
        envConfig = devConfig
        break
    case 'production':
    case 'prod':
        envConfig = prodConfig
        break
    default:
        envConfig = devConfig
}

const config = {
    envConfig:envConfig,
    baseConfig:baseConfig
};

module.exports = config;
