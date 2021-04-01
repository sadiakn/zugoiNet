const { Router } = require('express');
const { check } = require('express-validator');

const { validateJWT } = require('../middlewares/validate-jwt');
const { validateFields } = require('../middlewares/validate-fields');

const {
    getImages,
    getProducts,
    getProductsById,
    registerProduct,
    // registerImage,
    updateProduct
} = require('../controllers/product');

const router = new Router();

router.get('/', [
    validateJWT
], getProducts);

router.get('/:id', [
    validateJWT
], getProductsById);

router.get('/', [
    validateJWT
], getImages);

router.post('/', [
    validateJWT,
    check('barCode', 'El codigo de barra es obligatorio').not().isEmpty(),
    check('productName', 'El nombre del producto es obligatorio').not().isEmpty(),
    check('categoryId', 'La categoria del producto es obligatorio').not().isEmpty(),
    validateFields
], registerProduct);

router.put('/:id', [
    validateJWT
], updateProduct);

module.exports = router;