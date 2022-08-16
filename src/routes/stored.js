const express = require('express');
const router = express.Router();

const storedController = require('../app/controllers/StoredController');

router.get('/courses/created', storedController.storedCourses);
module.exports = router;
