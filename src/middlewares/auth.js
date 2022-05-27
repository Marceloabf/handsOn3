const {expressjwt} = require('express-jwt');
const {key} = require('../config/secret');

module.exports = expressjwt({
    secret : key,
    algorithms:["HS256"]
})