const express = require('express');
const router = express.Router();
const controller = require('../controllers/cart');

router
    .get('/', controller.get.index)
    .get('/user/:id', controller.get.byUser)
    .post('/', controller.post.index)
    .put('/:id', controller.put.index)
    .delete('/:id', controller.delete.index)

module.exports = router;
