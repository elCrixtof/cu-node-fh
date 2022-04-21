const { response, request }  = require('express');
const bcryptjs = require('bcryptjs');
const User = require('../models/user');
const { validateFields } = require('../middlewares/validate-fields');

const usersGet =  (req = request, res = response) => {
    const {q, name = 'no name', apikey, page = 1, limit} = req.query;
    res.json({
        msg: 'get API',
        q,
        name,
        apikey,
        page, 
        limit
    })
};

const usersPut = (req, res) => {
    const {id, date} = req.params
    res.json({
        msg: 'put API',
        id,
        date
    })
};

const usersPost = async (req, res) => {
    const { name, mail, password, role } = req.body;
    const user = new User({name, mail, password, role});

    //Validate mail
    const existEmail = await User.findOne({ mail });
    if(existEmail) {
        return res.status(400).json({
            msg: 'Mail already exists'
        })
    }
    //Encrypt password
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);
    
    //Save in database
    await user.save();

    res.json({
        user
    })
};

const usersDelete = (req, res) => {
    res.json({
        msg: 'delete API'
    })
};

module.exports = {
    usersGet,
    usersPut,
    usersPost,
    usersDelete
}