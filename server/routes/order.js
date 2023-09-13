const express = require('express');
const router = express.Router();
const controller = require('../controllers/order');

router
    .get('/', controller.get.index)
    .get('/:id', controller.get.byID)
    .get('/user/:userID', controller.get.byUserID)
    .post('/', controller.post.index)
    .put('/:id', controller.put.index)
    .delete('/:id', controller.delete.index)

module.exports = router;
