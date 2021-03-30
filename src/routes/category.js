const { Router } = require('express');
const { check } = require('express-validator');

const { validateJWT } = require('../middlewares/validate-jwt');
const { validateFields } = require('../middlewares/validate-fields');

const {
    getCategories,
    registerCategory,
    updateCategory
} = require('../controllers/category');

const router = new Router();

router.get('/', [
    validateJWT
], getCategories);

router.post('/', [
    validateJWT,
    check('categoryName', 'La categoria es obligatoria').not().isEmpty(),
    validateFields
], registerCategory);

router.put('/:id', [
    validateJWT,
    check('categoryName', 'La categoria es obligatoria').not().isEmpty(),
    validateFields
], updateCategory);

module.exports = router;