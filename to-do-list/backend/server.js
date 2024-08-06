const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

// Servir arquivos estáticos da pasta build
app.use(express.static(path.join(__dirname, 'build')));

// Rota para a página inicial
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
