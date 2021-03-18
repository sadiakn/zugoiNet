//Israel Rubio
const { Router } = require('express');

const {
    getUsers,
    getUserById,
    deleteUser,
} = require('../controllers/user');

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', deleteUser);

module.exports = router;