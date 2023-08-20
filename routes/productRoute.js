const express = require('express');
const Product = require('../models/productModel')
const {getProducts, getProduct,postProduct,putProduct,deleteProduct} = require('../controllers/productController')

const router = express.Router();

//GET//////////////////////////////////////////////////////
router.get('/',getProducts);

router.get('/:id',getProduct);

//POST/////////////////////////////////////////////////////
router.post('/', postProduct);

//PUT////////////////////////////////////////////////////
router.put('/:id',putProduct);

//DELETE//////////////////////////////////////
router.delete('/:id', deleteProduct);

module.exports = router;