const path = require('path');
const { v4: uuidv4 } = require('uuid');

const uploadFile = (files, validExtension = ['png', 'jpg', 'jpeg', 'gif'], folder = '') => {

    return new Promise((resolve, reject) => {
        const { file } = files;
        const shortName = file.name.split('.');
        const extension = shortName[shortName.length - 1];

        //Validar la extension de las fotos
        if (!validExtension.includes(extension)) {
            reject(`La extensión ${extension} no es permitida - ${validExtension}`);
        }

        const newFileName = uuidv4() + '.' + extension;
        const uploadPath = path.join(__dirname, '../uploads', folder, newFileName);

        file.mv(uploadPath, (err) => {
            if (err) {
                reject(err);
            }

            resolve(newFileName);
        });

    });

}

module.exports = {
    uploadFile
}