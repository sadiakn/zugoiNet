const Province = require('../models/province');

const getProvinces = async (req, res) => {
    try {
        const provinces = await Province.findAll();
        res.status(200).json(provinces);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Por favor comunicarse con el administrador encargado'
        });
    }
}

const getProvincesByCountry = async (req, res) => {
    const { countryId } = req.params;

    try {
        const provinces = await Province.findAll({
            where: {
                countryId,
            }
        });
        res.status(200).json(provinces);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Por favor comunicarse con el administrador encargado'
        });
    }
}

const registerProvince = async (req, res) => {
    const { provinceName, countryId } = req.body;

    try {
        const province = await Province.create({
            provinceName,
            countryId,
        });
        res.status(201).json({
            msg: 'Provincia registrada, ok',
            data: province
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Por favor comunicarse con el administrador encargado'
        });
    }

}

const updateProvince = async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    try {
        const province = await Province.findByPk(id);
        if (!province) {
            return res.status(404).json({
                msg: `No se encontro la provincia con el id ${id}`
            });
        }
        await province.update(data);
        res.status(200).json({
            msg: 'Provincia actualizada, ok',
            data: province
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Por favor comunicarse con el administrador encargado'
        });
    }
}

module.exports = {
    getProvinces,
    getProvincesByCountry,
    registerProvince,
    updateProvince
}