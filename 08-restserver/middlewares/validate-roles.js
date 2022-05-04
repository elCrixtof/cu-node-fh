const { response } = require("express")

const isAdminRole = (req, res = response, next) => {
    if( !req.user ) {return res.status(500).json({
            msg: 'It is impossible to verify user without a valid token'
        })
    }
    const { role, name } = req.user;
    if ( role !== 'ADMIN_ROLE' ) {
        return res.status(401).json({
            msg: `${name} is not an administrator - You can't do this`
        })
    }
    next();
}

module.exports = {
    isAdminRole
}