const Role = require('../models/role');

const isValidRole = async (role = '') => {
    const roleExist = await Role.findOne({role});
    if(!roleExist) {
        throw new Error(`The role ${role} is not registred in DB`)
    }
}

module.exports = {
    isValidRole
}