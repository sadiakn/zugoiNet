const { Router } = require('express');
const { check } = require('express-validator');

const { validateJWT } = require('../middlewares/validate-jwt');
const { validateFields } = require('../middlewares/validate-fields');

const {
getPrice,
getPriceById,
registerPrice,
updatePrice,
} =require('../controllers/price');

const router = new Router();

router.get('/', [
    validateJWT,
], getPrice);

router.get('/:id', [
    validateJWT,
], getPriceById);

router.post('/', [
    validateJWT,
    check('productId', 'El Id de producto es obligatorio').not().isEmpty(),
    check('branchOfficeId', 'El branchOfficeId es obligatorio').not().isEmpty(),
    check('Price', 'El precio es obligatorio').not().isEmpty(),
    
    validateFields
], registerPrice);

router.put('/:id', [
    validateJWT,
], updatePrice);

module.exports = router;