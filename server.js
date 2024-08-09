const express = require('express');
const path = require('path');
const app = express();
const port = 5000;
const bodyParser = require('body-parser')

// Servir arquivos estáticos da pasta build
app.use(express.static(path.join(__dirname, 'build')));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post('/login', (req, res) => {
  const {username , senha , email} = req.body;

  if (username === 'kauã' && senha === "197811@@@", email === "teste") {
    res.json ({status : true , message: 'Login Bem-sucedido'})
  } else {
    res.status(400).json ({status : false , message: 'Tentativa de login não autorizada'})
  }

})


// Rota para a página inicial
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



app.listen(port, () => {
  console.log(`O servidor esta rodando em http://localhost:${port}`);
});
