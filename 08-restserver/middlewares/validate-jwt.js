const { response } = require('express');
const jwt = require('jsonwebtoken');

const validateJWT = (req, res = response, next) => {
    const token = req.header('x-token');

    if( !token ) {
        return res.status(401).json({
            msg: 'There is not a token in the request'
        });
    }

    try {
        const {uid} = jwt.verify( token, process.env.SECRETORPRIVATEKEY );
        req.uid = uid;
        next();
    } catch (error) {
        res.status(401).json({
            msg: 'Invalid token',
            err: error.message
        })
    }

}

module.exports = {
    validateJWT
}