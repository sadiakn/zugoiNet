
const Price = require('../models/priceProductBranchOffice');

const getPrice = async (req, res) => {
    try {
        const prices = await Price.findAll();
        res.status(200).json(prices);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Por favor comunicarse con el administrador encargado'
        });
    }
}

const getPriceById = async (req, res) => {
    try {
        const { id } = req.params;
        const price = await Price.findByPk(id);
        if (price) {
        res.status(200).json(price);
        }else{
            res.status(404).json({
                msg: `No existe precio del producto con el id ${id}`,
              });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Por favor comunicarse con el administrador encargado'
        });
    }
}

const registerPrice = async (req, res) => {
    const { productId, branchOfficeId, Price } = req.body;
    try {

        const prices = await Price.create({
            productId,
            branchOfficeId,
            Price
        });
        res.status(201).json({
            msg: 'Precio registrado, ok',
            data: prices
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Por favor comunicarse con el administrador encargado'
        });
    }
}

const updatePrice = async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    try {
        const prices = await Price.findByPk(id);

        if (!prices) {
            return res.status(404).json({
                msg: `No se encontro el precio con el id ${id}`
            });
        }

        await Price.update(data);
        res.status(200).json({
            msg: 'Precio actualizado, ok',
            data: prices
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Por favor comunicarse con el administrador encargado'
        });
    }
}

module.exports = {
    getPrice,
    getPriceById,
    registerPrice,
    updatePrice,
}