const express = require('express');
const forkService = require('./fork.service');

const router = express.Router();

router.get('/', forkService.get);

module.exports = router;
