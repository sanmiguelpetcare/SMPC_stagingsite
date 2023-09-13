const express = require('express');
const router = express.Router();
const controller = require('../controllers/product');

router
    .get('/', controller.get.index)
    .get('/:id', controller.get.byID)
    .post('/', controller.post.index)
    .post('/bulk', controller.post.bulk)
    .post('/filtered', controller.post.filter)
    .put('/:id', controller.put.index)
    .put('/upload/:id', controller.put.upload)
    .delete('/:id', controller.delete.index)

module.exports = router;
