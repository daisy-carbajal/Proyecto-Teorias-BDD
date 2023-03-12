const { expressjwt } = require('express-jwt');
const config = require('config.json');

function jwt() {
    const { secret } = config;
    return expressjwt({ secret, algorithms: ['HS256'] }).unless({
        path: [
            '/users/authenticate'
        ]
    });
}

module.exports = jwt;