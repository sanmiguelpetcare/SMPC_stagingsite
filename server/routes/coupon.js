const express = require('express');
const router = express.Router();
const controller = require('../controllers/coupon');

router
    .get('/', controller.get.index)
    .get('/:id', controller.get.byID)
    .post('/', controller.post.index)
    .put('/:id', controller.put.index)
    .delete('/:id', controller.delete.index)

module.exports = router;
