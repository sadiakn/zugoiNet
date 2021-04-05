const fs = require('fs');

const cloudinary = require('cloudinary').v2;
cloudinary.config(process.env.CLOUDINARY_URL);

const Product = require('../models/product');

const { uploadFile } = require('../helpers/upload-file');

//const cloudinary = require('cloudinary').v2
//cloudinary.config(process.env.CLOUDINARY_URL);

//const { subirArchivo } = require('../helpers');

//const { Usuario, Producto } = require('../models');

const uploadProductImage = async (req, res) => {

    // if (!req.files || Object.keys(req.files).length === 0 || !req.files.file) {
    //     return res.status(400).json({
    //         msg: 'No hay archivos que subir'
    //     });
    // }

    // try {
    //     //Imágenes a subir
    //     //const imageName = await uploadFile(req.files);
    //     const { tempFilePath } = req.files.file;
    //     const { secure_url } = await cloudinary.uploader.upload(tempFilePath);
    //     res.status(200).json({ url: secure_url });
    // } catch (msg) {
    //     res.status(400).json({ msg });
    // }
    const { tempFilePath } = req.files.file;
    console.log(tempFilePath);
    res.json({ msg: 'ok' });
}

const updateProductImage = async (req, res) => {
    const { id } = req.params;

    try {
        product = await Product.findOne({
            where: {
                id,
            }
        });

        if (!product) {
            return res.status(404).json({
                msg: `No existe un producto con el id ${id}`
            });
        }

        const imageName = await uploadFile(req.files);
        //product.
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Por favor comunicarse con el administrador encargado'
        });
    }
}

module.exports = {
    uploadProductImage
}