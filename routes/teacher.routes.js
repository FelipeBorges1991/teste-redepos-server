const router = require("express").Router();
const TeacherModel = require("../models/Teacher.model");

// Crud (CREATE) - HTTP POST
// Criar um novo professor
router.post("/teacher", async (req, res) => {
  console.log(req.body);

  try {
    // Salva os dados de professor no banco de dados (MongoDB) usando o body da requisição como parâmetro
    const result = await TeacherModel.create(req.body);

    // Responder o professor recém-criado no banco para o cliente (solicitante).
    return res.status(201).json(result);
  } catch (err) {
    console.error(err);

    return res.status(500).json({ msg: JSON.stringify(err) });
  }
});

// cRud (READ) - HTTP GET
// Buscar todos os professores
router.get("/teacher", async (req, res) => {
  try {
    // Buscar o professor no banco pelo id
    const result = await TeacherModel.find().populate({
      path: "classroom",
      ref: "Classroom",
    });

    console.log(result);

    if (result) {
      // Responder o cliente com os dados do professor.
      return res.status(200).json(result);
    } else {
      return res.status(404).json({ msg: "Professor não encontrado." });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: JSON.stringify(err) });
  }
});

// cRud (READ) - HTTP GET
// Buscar dados do professor
router.get("/teacher/:id", async (req, res) => {
  try {
    // Extrair o parâmetro de rota para poder filtrar o professor no banco

    const { id } = req.params;

    // Buscar o professor no banco pelo id
    const result = await TeacherModel.findOne({ _id: id }).populate({
      path: "classroom",
      model: "Classroom",
    });

    console.log(result);

    if (result) {
      // Responder o cliente com os dados do professor.
      return res.status(200).json(result);
    } else {
      return res.status(404).json({ msg: "Professor não encontrado." });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: JSON.stringify(err) });
  }
});

// crUd (UPDATE) - HTTP PUT/PATCH
// Atualizar um professor
router.put("/teacher/:id", async (req, res) => {
  try {
    // Extrair o id do professor do parâmetro de rota
    const { id } = req.params;

    // Atualizar esse professor específico no banco
    const result = await TeacherModel.findOneAndUpdate(
      { _id: id },
      { $set: req.body },
      { new: true }
    );

    console.log(result);

    if (!result) {
      return res.status(404).json({ msg: "Professor não encontrado." });
    }

    // Responder com o professor atualizado para o cliente
    return res.status(200).json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: JSON.stringify(err) });
  }
});

// cruD (DELETE) - HTTP DELETE
// Deletar um professor
router.delete("/teacher/:id", async (req, res) => {
  try {
    // Extrair o id do professor do parâmetro de rota
    const { id } = req.params;

    // Deletar o professor no banco
    const result = await TeacherModel.deleteOne({ _id: id });

    console.log(result);

    if (result.n === 0) {
      return res.status(404).json({ msg: "Professor não encontrado." });
    }

    return res.status(200).json({});
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: JSON.stringify(err) });
  }
});

module.exports = router;
