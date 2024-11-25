// Importar as dependências necessárias
import express from "express";
import routes from "./src/routes/postsRoutes.js";

// Criar uma instância do Express
const app = express();
app.use(express.static("uploads"))
routes(app)

// Iniciar o servidor na porta 3000
app.listen(3000, () => {
    console.log("servidor escutando...");
});