const express = require('express');

const addProductController = require('../controllers/products');

const router = express.Router();

router.get('/add-product', addProductController.getAddProduct);
router.post('/add-product',addProductController.postAddProduct);

module.exports = router;