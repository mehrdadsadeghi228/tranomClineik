const { managerController } = require('../../controllers/manager/manager.controller');

const app = require('express').Router();


app.post('/AddDoctor',managerController.AddDoctor);

app.post('/SendsMobileCodeAdmin',managerController.SendsMobileCodeAdmin);

app.get('/getVerifyMobileAdmin',managerController.getVerifyMobileAdmin);

app.put("/manageTimeSet",managerController.manageTimeSet);

module.exports = {
    managerRouter: app
}
