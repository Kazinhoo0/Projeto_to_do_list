const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const path = require('path');
const app = express();
const port = 5000;
const bodyParser = require('body-parser')

// conexão com o banco de dados sqlite
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.message);
  } else {
    console.log('Conectado ao banco de dados SQLite.');
  }
});

db.run(`
    CREATE TABLE IF NOT EXISTS lembretes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nomelembrete TEXT NOT NULL,
        categoria TEXT NOT NULL,
        ischecked TEXT NOT NULL
    )
`);


// Servir arquivos estáticos da pasta build
app.use(express.static(path.join(__dirname, 'build')));


// Rota para a página inicial
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post('/login', (req, res) => {
  const { username, senha } = req.body;

  console.log(username, senha)


  const query = `SELECT ID FROM usuarios where username = ? AND senha = ?`;

  db.get(query, [username, senha], function (err, row) {
    if (err) {
      console.error('Erro ao inserir no banco de dados:', err.message);
      return res.status(500).json({ error: err.message });
    }


    if (row) {
      res.status(200).json({ success: true, id: row.id, message: 'Login Bem-sucedido' });
    } else {
      res.status(400).json({ success: false, message: 'Tentativa de login não autorizada' });
    }

  });

})


app.post('/criarconta', (req, res) => {
  const { username, nome, sobrenome, senha, Email } = req.body;

  // Verifique se todos os campos estão presentes
  if (!username || !nome || !sobrenome || !senha || !Email) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  console.log('Dados recebidos:', { username, nome, sobrenome, senha, Email });

  const query = `INSERT INTO usuarios (nome, sobrenome , email, username , senha) VALUES (?, ?, ?, ?, ?)`;

  db.run(query, [nome, sobrenome, Email, username, senha], function (err) {
    if (err) {
      console.error('Erro ao inserir no banco de dados:', err.message);
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: this.lastID });
  });
});


app.post('/criarlembretes' , (req,res) => {
  const {nomelembrete, ischecked, categoria} = req.body;

  if (!nomelembrete || !categoria || !ischecked) {
    return res.status(400).json ({error: 'Todos os campos são obrigatórios'});
  }

  console.log('Dados do lembrete :',{ nomelembrete, categoria, ischecked  });


  const query = 'INSERT INTO lembretes (nomelembrete,categoria,ischecked) VALUES ( ? , ? , ? )';

  db.run(query, [nomelembrete , categoria , ischecked],
    function (err) {
      if (err) {
        console.log('Erro ao cadastrar novo lembrete:' , err.message);
        return res.status(500).json({error: err.message});
      }
      res.status(201).json({id: this.lasID})
    }
    )
})
  






app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
