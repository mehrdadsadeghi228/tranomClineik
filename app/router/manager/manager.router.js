const { managerController } = require('../../controllers/manager/manager.controller');

const app = require('express').Router();


app.post('/AddDoctor',managerController.AddDoctor);

app.post('/SendsMobileCodeAdmin',managerController.SendsMobileCodeAdmin);

app.post('/addDays',managerController.addDays);

app.get('/getVerifyMobileAdmin',managerController.getVerifyMobileAdmin);

app.put("/manageTimeSet",managerController.manageTimeSet);
app.get("/manageTimeGet",managerController.manageTimeGet);

module.exports = {
    managerRouter: app
}
