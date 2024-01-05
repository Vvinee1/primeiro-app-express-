const express = require('express');
const app = express();
const port = 3000;

// Rota padrão
app.get('/', (req, res) => {
  res.send('Bem-vindo ao meu aplicativo Express!');
});

// Rota com parâmetros
app.get('/users/:id', (req, res) => {
  res.send(`Detalhes do usuário com ID ${req.params.id}`);
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
