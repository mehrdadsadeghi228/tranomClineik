const {customerRouter} = require('./customer/customer.router');
const {managerRouter} = require('./manager/manager.router');
const { overViewRouters } = require('./overview/overview.router');

const app = require('express').Router();


app.use(customerRouter)
app.use(overViewRouters);
app.use(managerRouter);
module.exports = {
    AllRouters: app
}
