const express = require('express');

const router = express.Router();

router.post('/login', loginPage);
router.get('/dashboard', dashboardPage);

module.exports = router;