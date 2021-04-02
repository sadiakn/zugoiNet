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

    try {
        const product = await Product.create({
            barCode,
            productName,
            categoryId
        });

        res.status(201).json({
            msg: 'Producto registrado exitosamente',
            data: product,
        });
    } catch (error) {
        console.log(error);
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
    getImages,
    getProducts,
    getProductsById,
    registerProduct,
    // registerImage,
    updateProduct

}