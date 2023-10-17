const customerAuthRouter = require('./customer/Auth/customerAuth.router');
const {customerRouter} = require('./customer/customer.router');
const {managerRouter} = require('./manager/manager.router');
const { overViewRouters } = require('./overview/overview.router');

const app = require('express').Router();


app.use(overViewRouters);
app.use("manager",managerRouter);
app.use("customer",customerAuthRouter);
module.exports = {
    AllRouters: app
}
