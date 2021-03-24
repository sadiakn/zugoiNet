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

const login = async (req, res) => {
  let { email, password } = req.body;
  try {
    const isValid = await User.findOne({
      where: {
        email: email,
        password: password
      }
     });
    if (isValid) {
      res.status(200).json({
        msg: "Las credenciales del login son validas",
      })
    } else {
      res.status(404).json({
        msg: "No se ha encontrado usuario con esas credenciales",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Por favor comuníquese con el administrador",
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

const updateUser = async (req, res, next) => {
  try {
    let { id } = req.params;
     let {name, lastName, email, phone, sex, password } = req.body;
     const user = await User.findByPk(id);
     const salt = bcryptjs.genSaltSync(10);
     password = bcryptjs.hashSync(password, salt);
    
     if (user) {

       await User.update({
       name: name,
       lastName: lastName,
       email: email,
       phone: phone,
       sex: sex,
       password: password,
     },{where: {id : id}});

     res.status(200).json({
       msg: `Usuario ${id} actualizado existosamente`,
     });
     
   }else {
     res.status(404).json({
       msg: `No existe un usuario con el id ${id}`,
     });
   }
   
  }catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Comunicarse con el administrador encargado",
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    let { id } = req.params;

    await User.destroy({where: {id : id}});
    res.status(204).json();
  }catch (error) {
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
  login,
};
