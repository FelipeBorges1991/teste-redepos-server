const router = require("express").Router();
const ClassroomModel = require("../models/Classroom.model");

// Crud (CREATE) - HTTP POST
// Criar uma nova sala
router.post("/classroom", async (req, res) => {
  console.log(req.body);

  try {
    // Salva os dados de sala no banco de dados (MongoDB) usando o body da requisição como parâmetro
    const result = await ClassroomModel.create(req.body);

    // Responder a sala recém-criada no banco para o cliente (solicitante).
    return res.status(201).json(result);
  } catch (err) {
    console.error(err);

    return res.status(500).json({ msg: JSON.stringify(err) });
  }
});

// cRud (READ) - HTTP GET
// Buscar todos as salas
router.get("/classroom", async (req, res) => {
  try {
    // Buscar a sala no banco pelo id
    const result = await ClassroomModel.find().populate({
      path: "teachers",
      ref: "Teacher",
    });

    console.log(result);

    if (result) {
      // Responder o cliente com os dados da sala.
      return res.status(200).json(result);
    } else {
      return res.status(404).json({ msg: "Sala não encontrada." });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: JSON.stringify(err) });
  }
});

// cRud (READ) - HTTP GET
// Buscar dados da sala
router.get("/classroom/:id", async (req, res) => {
  try {
    // Extrair o parâmetro de rota para poder filtrar a sala no banco

    const { id } = req.params;

    // Buscar a sala no banco pelo id
    const result = await ClassroomModel.findOne({ _id: id }).populate({
      path: "teacher",
      model: "Teacher",
    });

    console.log(result);

    if (result) {
      // Responder o cliente com os dados da sala.
      return res.status(200).json(result);
    } else {
      return res.status(404).json({ msg: "Sala não encontrada." });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: JSON.stringify(err) });
  }
});

// crUd (UPDATE) - HTTP PUT/PATCH
// Atualizar uma sala
router.put("/classroom/:id", async (req, res) => {
  try {
    // Extrair o id da sala do parâmetro de rota
    const { id } = req.params;

    // Atualizar esse professor específico no banco
    const result = await ClassroomModel.findOneAndUpdate(
      { _id: id },
      { $set: req.body },
      { new: true }
    );

    console.log(result);

    if (!result) {
      return res.status(404).json({ msg: "Sala não encontrada." });
    }

    // Responder com a sala atualizada para o cliente
    return res.status(200).json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: JSON.stringify(err) });
  }
});

// cruD (DELETE) - HTTP DELETE
// Deletar uma sala
router.delete("/classroom/:id", async (req, res) => {
  try {
    // Extrair o id da sala do parâmetro de rota
    const { id } = req.params;

    // Deletar a sala no banco
    const result = await ClassroomModel.deleteOne({ _id: id });

    console.log(result);

    if (result.n === 0) {
      return res.status(404).json({ msg: "Sala não encontrada." });
    }

    return res.status(200).json({});
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: JSON.stringify(err) });
  }
});

module.exports = router;
