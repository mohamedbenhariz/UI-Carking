const authRouter = require(`./auth.route`);
const userRouter = require(`./users.route`);

const appRouters = [
    authRouter,
    userRouter
]


module.exports = appRouters;