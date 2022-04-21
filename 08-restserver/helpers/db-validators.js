const Role = require('../models/role');
const User = require('../models/user');

const isValidRole = async (role = '') => {
    const roleExist = await Role.findOne({role});
    if(!roleExist) {
        throw new Error(`The role ${role} is not registred in DB`);
    }
}

const mailValidation = async ( mail = '' ) => {
    const existEmail = await User.findOne({ mail });
    if(existEmail) {
        throw new Error(`The mail ${mail} already exists`);
    }
}

module.exports = {
    isValidRole,
    mailValidation
}