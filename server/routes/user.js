const express = require('express');
const router = express.Router();
const controller = require('../controllers/user');

router
    .get('/', controller.get.index)
    .get('/email', controller.get.byUsername)
    .post('/', controller.post.index)
    .post('/login/:id', controller.post.login)

module.exports = router;