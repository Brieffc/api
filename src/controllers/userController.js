const modelUser = require("../models/users");

const create = async (req, res) => {
  try {
    newUser = await modelUser.create({
      name: req.body.name,
      cpf: req.body.cpf,
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = { create };
