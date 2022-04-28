const { response, request }  = require('express');
const User = require('../models/user');

const login = async (req = require, res = response) => {
    try {
        const { mail, password } = req.body;

        const user = await User.findOne({mail, password});
        
        res.json({
            msg: 'Authetication is ok',
            mail,
            password, 
            user
        });
    } catch (error) {
        // console.log(typeof(error));
        // console.log(error.message);
        res.json({
            msg: error.message,
            type: error.name
        })
    }
}

module.exports = {
    login
}