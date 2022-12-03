const modelUser = require("../../db/models/user");

const create = async (req, res) => {
  try {
    newUser = await modelUser.create({
      name: req.body.name,
      cpf: req.body.cpf,
      office_id: req.body.office_id,
      uf: req.body.uf,
      status: req.body.status,
      created_at: new Date(),
      updated_at: new Date(),
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = { create };
