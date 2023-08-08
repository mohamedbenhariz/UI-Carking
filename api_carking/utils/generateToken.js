//methode generation du token 
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    return jwt.sign({user}, "anyKey", { expiresIn: '3h'});
}

module.exports = generateToken;