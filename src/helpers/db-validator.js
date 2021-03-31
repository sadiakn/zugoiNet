const User = require('../models/user');
const Category = require('../models/category');

const emailExist = async (email = '') => {
    const ifExist = await User.findOne({
        where: {
            email
        }
    });
    if (ifExist) {
        throw new Error(`El correo ${email}, ya esta registrado`);
    }
}

const phoneExist = async (phone = '') => {
    const ifExist = await User.findOne({
        where: {
            phone
        }
    });
    if (ifExist) {
        throw new Error(`El telefono ${phone}, ya esta registrado`);
    }
}

const categoryExist = async (categoryName = '') => {
    const ifExist = await Category.findOne({
        where: {
            categoryName
        }
    });
    if (ifExist) {
        throw new Error(`La categoria ${categoryName}, ya esta registrada`);
    }
}

module.exports = {
    emailExist,
    phoneExist,
    categoryExist
}