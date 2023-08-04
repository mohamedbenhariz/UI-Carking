//agent middleware

const {Role} = require('../utils/enum')

const isAgent = (req, res, next) => {
    if (req?.user && req?.user?.role == Role.Agent) {
        next()
    } else {
        res.status(401).json({message: "you are not authorized to use this route"});
    }
};

module.exports = isAgent