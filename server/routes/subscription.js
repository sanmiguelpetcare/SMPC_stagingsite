const express = require('express');
const router = express.Router();
const controller = require('../controllers/subscription');

router
    .get('/', controller.get.index)
    .get('/cart', controller.get.byID)
    .get('/subscribed/:id', controller.get.subscribed)
    .post('/', controller.post.index)
    .put('/:id', controller.put.index)
    .put('/checkout/:id', controller.put.checkout)
    .delete('/:id', controller.delete.index)

module.exports = router;
