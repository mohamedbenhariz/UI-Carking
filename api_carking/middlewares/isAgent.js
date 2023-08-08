//admin middleware

const {Role} = require('../utils/enum')

const isAgent = (req, res, next) => {
    console.log(req.user)
    if (req?.user && req?.user?.user.roleId == Role.Agent.id) {
        next()
    } else {
        res.status(401).json({message: "you are not authorized to use this route"});
    }
};

module.exports = isAgent
