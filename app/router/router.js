const {customerRouter} = require('./customer/customer.router');

const app = require('express').Router();


app.use(customerRouter)

module.exports = {
    AllRouters: app
}
