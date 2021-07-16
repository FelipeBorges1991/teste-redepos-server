const router = require("express").Router();
const StudentModel = require("../models/Student.model");

// Crud (CREATE) - HTTP POST
// Criar um novo aluno
router.post("/student", async (req, res) => {
  console.log(req.body);

  try {
    // Salva os dados de aluno no banco de dados (MongoDB) usando o body da requisição como parâmetro
    const result = await StudentModel.create(req.body);

    // Responder o aluno recém-criado no banco para o cliente (solicitante).
    return res.status(201).json(result);
  } catch (err) {
    console.error(err);

    return res.status(500).json({ msg: JSON.stringify(err) });
  }
});

// cRud (READ) - HTTP GET
// Buscar todos os alunos
router.get("/student", async (req, res) => {
  try {
    // Buscar o aluno no banco pelo id
    const result = await StudentModel.find().populate({
      path: "teacher",
      model: "Teacher",
    });

    console.log(result);

    if (result) {
      // Responder o cliente com os dados do aluno.
      return res.status(200).json(result);
    } else {
      return res.status(404).json({ msg: "Aluno não encontrado." });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: JSON.stringify(err) });
  }
});

// cRud (READ) - HTTP GET
// Buscar dados do aluno
router.get("/student/:id", async (req, res) => {
  try {
    // Extrair o parâmetro de rota para poder filtrar o aluno no banco

    const { id } = req.params;

    // Buscar o aluno no banco pelo id
    const result = await StudentModel.findOne({ _id: id }).populate({
      path: "teacher",
      model: "Teacher",
    });

    console.log(result);

    if (result) {
      // Responder o cliente com os dados do aluno.
      return res.status(200).json(result);
    } else {
      return res.status(404).json({ msg: "Aluno não encontrado." });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: JSON.stringify(err) });
  }
});

// crUd (UPDATE) - HTTP PUT/PATCH
// Atualizar um aluno
router.put("/student/:id", async (req, res) => {
  try {
    // Extrair o id do aluno do parâmetro de rota
    const { id } = req.params;

    // Atualizar esse aluno específico no banco
    const result = await StudentModel.findOneAndUpdate(
      { _id: id },
      { $set: req.body },
      { new: true }
    );

    console.log(result);

    if (!result) {
      return res.status(404).json({ msg: "Aluno não encontrado." });
    }

    // Responder com o aluno atualizado para o cliente
    return res.status(200).json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: JSON.stringify(err) });
  }
});

// cruD (DELETE) - HTTP DELETE
// Deletar um aluno
router.delete("/student/:id", async (req, res) => {
  try {
    // Extrair o id do aluno do parâmetro de rota
    const { id } = req.params;

    // Deletar o aluno no banco
    const result = await StudentModel.deleteOne({ _id: id });

    console.log(result);

    if (result.n === 0) {
      return res.status(404).json({ msg: "Aluno não encontrado." });
    }

    return res.status(200).json({});
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: JSON.stringify(err) });
  }
});

module.exports = router;
