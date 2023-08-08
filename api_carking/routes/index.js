const authRouter = require(`./auth.route`);
const userRouter = require(`./users.route`);
const vehiculeRouter = require(`./vehicules.route`);
const declarationRouter = require(`./declarations.route`);

const appRouters = [
    authRouter,
    userRouter,
    vehiculeRouter,
    declarationRouter
]


module.exports = appRouters;