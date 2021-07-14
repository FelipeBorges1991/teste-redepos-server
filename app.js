const express = require("express");
const cors = require("cors");

const PORT = 4000;

const app = express();

// Importando as configurações do banco de dados e inicializando a conexão
const db = require("./config/db.config");
db();

// Configurar o express para entender requisições contendo JSON no corpo
app.use(express.json());

// Configurar o CORS (Cross-Origin-Resource-Sharing) para permitir que o nosso cliente React acesse este servidor de um domínio diferente
app.use(cors({ origin: "http://localhost:3000" }));

const studentRouter = require("./routes/student.routes");
app.use("/", studentRouter);

const teacherRouter = require("./routes/teacher.routes");
app.use("/", teacherRouter);

const classroomRouter = require("./routes/classroom.routes");
app.use("/", classroomRouter);

// Inicia o servidor para escutar requisições HTTP na porta 4000
app.listen(PORT, () => console.log(`Server up and running at port ${PORT}`));
