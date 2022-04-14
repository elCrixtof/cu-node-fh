const { Router } = require('express');
const {
    usersGet,
    usersPut,
    usersPost,
    usersDelete
} = require('../controllers/users')

const router = Router();

router.get('/', usersGet);

router.put('/', usersPut);

router.post('/', usersPost);

router.delete('/', usersDelete);

router.use('*', (req, res) => {
    res.send('404 | page not found')
});

module.exports = router;