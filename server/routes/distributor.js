const express = require('express');
const router = express.Router();
const controller = require('../controllers/distributor');

router
    .get('/', controller.get.index)
    .get('/:id', controller.get.byID)
    .get('/zip/:zip', controller.get.byZip)
    .post('/', controller.post.index)
    .put('/:id', controller.put.index)
    .delete('/:id', controller.delete.index)

module.exports = router;
