const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');

const {
    usersGet,
    usersPut,
    usersPost,
    usersDelete
} = require('../controllers/users');
const { isValidRole } = require('../helpers/db-validators')

const router = Router();

router.get('/', usersGet);

router.put('/:id/:date', usersPut);

router.post('/', [
    check('mail', 'The mail is not valid').isEmail(),
    check('password', 'The password must have more than 6 letters').isLength({min: 6}),
    check('name', 'The name is required').not().isEmpty(),
    // check('role', 'It is not a valid role').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('role').custom(isValidRole),
    validateFields
], usersPost);

router.delete('/', usersDelete);

module.exports = router;