const express = require("express");
const router = express.Router();
let Router = require("./route");


router.post("/student/:id", Router.getRecord);
router.post('/create_student', Router.postData);
router.get('/get_highest_avg', Router.getHighestAvg);



module.exports = router;
