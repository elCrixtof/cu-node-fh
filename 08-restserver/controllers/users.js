const { response }  = require('express')

const usersGet =  (req, res = response) => {
    res.json({
        msg: 'get API'
    })
};

const usersPut = (req, res) => {
    res.json({
        msg: 'put API'
    })
};

const usersPost = (req, res) => {
    res.json({
        msg: 'post API'
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