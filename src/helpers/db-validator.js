const User  = require('../models/user');

const emailExist = async( email = '') => {
    const ifExist = await User.findOne({
        where: {
            email
        }
    });
    if( ifExist ){
        throw new Error(`El correo ${ email }, ya existe en la base de datos`);
    }
}

module.exports = {
    emailExist
}