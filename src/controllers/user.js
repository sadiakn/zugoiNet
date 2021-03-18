const User = require("../models/user");

const getUsers = async (req, res) => {
  const users = await User.findAll();
  res.status(200).json(users);
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
        message: `No existe un usuario con el id ${id}`,
      });
    }
  } catch(error) {
    console.log(error);
    res.status(500).json({
      message: "Porfavor comunicarse con el administrador",
    });
  }
};

const createUser = async (req, res) => {
  try {
    let { name, lastName, email, phone, sex, password } = req.body;
    //Verificar si el email existe

    //Cifrar la constraseña

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
      message: "Usuario resgistrado existosamente",
      data: user,
    });

  } catch (error) {
    console.log(error);
    res.json(500).json({
      message: "Comunicarse con el administrador encargado",
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    let { name, lastName, email, phone, sex, password } = req.body;
   
    const user = await User.destroy({
      name,
      lastName,
      email,
      phone,
      sex,
      password,
    });

    res.status(201).json({
      message: "Usuario eliminado existosamente",
      data: user,
    });

  } catch (error) {
    console.log(error);
    res.json(500).json({
      message: "Comunicarse con el administrador encargado",
    });
  }
};

const updateUser = async (req, res) => {
  try {
    let { name, lastName, email, phone, sex, password } = req.body;
   
    const user = await User.update({
      name,
      lastName,
      email,
      phone,
      sex,
      password,
    });

    res.status(201).json({
      message: "Usuario actualizado existosamente",
      data: user,
    });

  } catch (error) {
    console.log(error);
    res.json(500).json({
      message: "Comunicarse con el administrador encargado",
    });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
};
