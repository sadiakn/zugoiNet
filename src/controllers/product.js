const { sequelize } = require('../models/image');
const Product = require('../models/product');
const Image = require("../models/image");

const getProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Por favor comunicarse con el administrador encargado'
        });
    }
}

const getProductsById = async (req, res) => {
    try {
        const { id } = req.params;
        const products = await Product.findByPk(id);
        if (products) {
            res.status(200).json(products);
        } else {
            res.status(404).json({
                msg: `No existe un producto con el id ${id}`,
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Por favor comunicarse con el administrador encargado'
        });
    }
}

const registerProduct = async (req, res) => {
    const { barCode, productName, categoryId } = req.body;

    const t = await sequelize.transaction();
    try {
        //Upload image
        const { tempFilePath } = req.files.file;
        const { secure_url } = await cloudinary.uploader.upload(tempFilePath);
        const product = await Product.create({
            barCode,
            productName,
            categoryId
        }, { transaction: t });

        const image = await Image.create({
            url: secure_url,
            productId: product.id
        }, { transaction: t });

        await t.commit();

        res.status(201).json({
            msg: 'Producto registrado exitosamente',
            data: {
                id: product.id,
                barCode: product.barCode,
                categoryId: product.categoryId,
                image: {
                    url: image.url
                }
            }
        });
    } catch (error) {
        console.log(error);
        await t.rollback();
        const nameArr = secure_url.split('/');
        const name = nameArr[nameArr.length - 1];
        const [public_id] = name.split('.');
        await cloudinary.uploader.destroy(public_id);
        res.status(500).json({
            msg: 'Por favor comunicarse con el administrador encargado'
        });
    }
}

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    try {
        const product = await Product.findByPk(id);

        if (!product) {
            return res.status(404).json({
                msg: `No se encontro el producto con el id ${id}`
            });
        }
        await product.update(data);

        res.status(200).json({
            msg: 'producto actualizado correctamente',
            data: product
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Por favor comunicarse con el administrador encargado'
        });
    }
}

module.exports = {
    getProducts,
    getProductsById,
    registerProduct,
    updateProduct

}