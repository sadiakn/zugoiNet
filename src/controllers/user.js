const User = require("../models/user");
const bcryptjs = require('bcryptjs');


const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Por favor comunicarse con el administrador",
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);

    //Validar si el id de usuario existe
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({
        msg: `No existe un usuario con el id ${id}`,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Por favor comunicarse con el administrador",
    });
  }
};

const createUser = async (req, res) => {
  let { name, lastName, email, phone, sex, password } = req.body;
  try {
    //Cifrar la constraseña
    const salt = bcryptjs.genSaltSync(10);
    password = bcryptjs.hashSync(password, salt);
    //Save user
    const user = await User.create({
      name,
      lastName,
      email,
      phone,
      sex,
      password,
    });

    res.status(201).json({
      msg: "Usuario resgistrado existosamente",
      data: user,
    });

  } catch (error) {
    console.log(error);
    res.json(500).json({
      msg: "Comunicarse con el administrador encargado",
    });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  let { password, email, ...rest } = req.body;
  try {
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({
        msg: `No existe un usuario con el id ${id}`
      });
    }
    await user.update(rest);

    res.status(200).json({
      msg: 'El usuario se actualizo',
      data: user
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Comunicarse con el administrador encargado",
    });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({
        msg: `No existe un usuario con el id ${id}`
      });
    }

    //await user.update({ state: 0});
    await user.destroy();
    res.status(204).end();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Comunicarse con el administrador encargado",
    });
  }
};


module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
