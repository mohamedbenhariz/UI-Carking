//admin middleware

const {Role} = require('../utils/enum')

const isAdmin = (req, res, next) => {
    console.log(req)
    if (req?.user && req?.user?.roleId == Role.id) {
        next()
    } else {
        res.status(401).json({message: "you are not authorized to use this route"});
    }
};

module.exports = isAdmin
