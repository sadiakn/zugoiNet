const { Router } = require('express');

const {
    getUsers,
    getUserById,
    updateUser,
} = require('../controllers/user');

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', updateUser);

module.exports = router;