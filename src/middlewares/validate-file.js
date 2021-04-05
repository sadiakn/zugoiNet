
const validateFileToUpload = (req, res, next) => {
    if (!req.files || Object.keys(req.files).length === 0 || !req.files.file) {
        throw new Error('El file es obligatorio');
    }

    next();
}

const validateExtensionFile = (req, res, next) => {
    validExtension = ['png', 'jpg', 'jpeg', 'gif'];
    const { name } = req.files.file;
    const shortName = file.name.split('.');
    const extension = shortName[shortName.length - 1];

    //Validar la extension de las fotos
    if (!validExtension.includes(extension)) {
        throw new Error('`La extensión ${extension} no es permitida - ${validExtension}`');
    }

    next();
}

module.exports = {
    validateFileToUpload,
    validateExtensionFile
}