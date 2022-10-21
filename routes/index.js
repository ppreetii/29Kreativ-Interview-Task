const express = require('express');

const router = new express.Router();

const indexController = require('../controllers/index')

router.get("/", indexController.getHomePage)
router.post("/", indexController.postHomePage)

module.exports = router;