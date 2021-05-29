const express = require("express");
const router = express.Router();
let Router = require("./route");

// router.get("/getData", Router.getData);
router.post("/:id", Router.getRecord);
router.post('/create_student', Router.postData);



module.exports = router;
