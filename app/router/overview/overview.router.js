const { overviewController } = require('../../controllers/overview.controller');

const app = require('express').Router();

app.get("/ListOfDoctor",overviewController.getListOfDoctor);

app.get("/ListOfDoctorWithTime",overviewController.getListOfDoctorWithTime);

app.post("/ResumeDoctor",overviewController.getResumeDoctor);
module.exports = {
    overViewRouters: app
}
