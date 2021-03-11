const User = require("../models/user");

const getUsers = async (req, res) => {
  const users = await User.findAll();
  res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id);

  //Validar si el id del usuario existe
  if ( user ) {
      res.status(200).json(user);
  }else {
      res.status(400).json({
          code: '404 Not Found',
          message: `No existe un usuario con el id ${id}`,
      });
  };
  
  res.status(200).json(user);
};

const createUser = async (req, res) => {
  let { name, lastName, email, phone, sex, password } = req.body;

  try {
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

module.exports = {
  getUsers,
  getUserById,
  createUser,
};
