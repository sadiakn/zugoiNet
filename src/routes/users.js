//Israel Rubio
const { Router } = require('express');
const { check } = require('express-validator');

const { validateFields } = require('../middlewares/validate-fields');
const { emailExist } = require('../helpers/db-validator');

const {
    getUsers,
    getUserById,
    createUser,
} = require('../controllers/user');

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('lastName', 'El apellido es obligatorio').not().isEmpty(),
    check('email', 'El correo no es valido').isEmail(),
    check('email').custom( emailExist),
    check('sex', 'El sexo es obligatorio').not().isEmpty(),
    check('password', 'La constraseña debe tener almenos 8 caracteres').isLength({ min: 8 }),
    validateFields
],  createUser);
//router.put('/', );
//router.delete('/', );
//router.post('/login', )


module.exports = router;