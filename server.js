const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const path = require('path');
const app = express();
const port = 5000;
const bodyParser = require('body-parser')
const cors = require('cors')



app.use(cors({
  origin: 'https://projeto-to-do-list-2.onrender.com/',
  methods: ['POST', 'GET', 'DELETE', 'PUT'],
  credentials: true,

}))

// conexão com o banco de dados sqlite
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.message);
  } else {
    console.log('Conectado ao banco de dados SQLite.');
  }
});

db.run(
  `ALTER TABLE lembretes_users
  ADD COLUMN descricao TEXT, vencimento TEXT, horavencimento INTEGER  
  `
);




// Servir arquivos estáticos da pasta build
app.use(express.static(path.join(__dirname, 'build')));


// Rota para a página inicial
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post('/login', (req, res) => {
  const { email } = req.body;

  console.log(
    'Tentativa de login realizada por:  ', email
  )


  const query = `SELECT id, senha, username FROM usuarios WHERE email = ?`;

  db.get(query, [email], function (err, row) {
    if (err) {
      console.error('Erro ao inserir no banco de dados:', err.message);
      return res.status(500).json({ error: err.message });
    }


    if (row) {
      res.status(200).json({
        success: true,
        id: row.id,
        message: 'Login Bem-sucedido',
        username: row.username,
      });

    } else {
      res.status(400).json({ success: false, message: 'Tentativa de login não autorizada' });
    }

  });

})

app.post('/Confirmaremail', (req, res) => {
  const { to, subject, text } = req.body;


  const nodemailer = require('nodemailer')

  let transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    secure: false,
    auth: {
      user: '7a794c001@smtp-brevo.com',
      pass: 'VbPfakE6gW4wXGmN'
    }
  });


  let mailOptions = {
    from: "'Kauã Lopes' <lopeskazin@gmail.com> ",
    to: to,
    subject: subject,
    text: text

  }


  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ success: false, error: error.toString() });
    }
    res.status(200).json({ success: true, info: info.response });
  });

})




app.post('/criarconta', (req, res) => {
  const { nome, sobrenome, email, username, senha } = req.body;

  // Verifique se todos os campos estão presentes
  if (!username || !nome || !sobrenome || !senha || !email) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  console.log('Dados recebidos:', { username, nome, sobrenome, senha, email });

  const query = `INSERT INTO usuarios (nome, sobrenome , email, username , senha) VALUES (?, ?, ?, ?, ?)`;

  db.run(query, [nome, sobrenome, email, username, senha], function (err) {
    if (err) {
      console.error('Erro ao inserir no banco de dados:', err.message);
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({
      id: this.lastID,
      message: 'conta criada com sucesso!',
      email: email,
      nome: nome
    });
  });
});


app.post('/index/criarlembretes', (req, res) => {
  const { nomelembrete, ischecked, categoria, user_id, horavencimento, vencimento, descricao } = req.body;



  console.log(req.body)


  if (!nomelembrete || !categoria || !ischecked || !user_id, !vencimento, !horavencimento, !descricao) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  console.log('Dados do lembrete :', { nomelembrete, categoria, ischecked, user_id, vencimento, horavencimento, descricao });


  const query = 'INSERT INTO lembretes_users (nomelembrete, categoria, ischecked, user_id, horavencimento, vencimento, descricao) VALUES (?, ?, ?, ?, ?, ? ,? )';

  db.run(query, [nomelembrete, categoria, ischecked, user_id, horavencimento, vencimento, descricao],
    function (err) {
      if (err) {
        console.log('Erro ao cadastrar novo lembrete:', err.message);
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({
        success: true,
        id: this.lasID,
        message: "item adicionado com sucesso"
      })
    }
  )
})


app.post('/gerenciarlembretes', (req, res) => {
  const { userid } = req.body;


  if (!userid) {
    return res.status(400).json({ message: 'id do usuário é obrigatório' })

  }


  const query = `SELECT * FROM lembretes_users WHERE user_id = ?`;

  db.all(query, [userid], function (err, rows) {
    if (err) {
      console.error('Erro ao consultar o banco de dados:', err.message);
      return res.status(500).json({ error: err.message });
    }

    // Se houver itens no banco, retorna-os
    if (rows.length > 0) {
      res.status(200).json({
        success: true,
        message: 'Itens encontrados com sucesso',
        items: rows
      });
    } else {
      // Caso não haja itens na tabela
      res.status(404).json({ success: false, message: 'Nenhum item encontrado' });
    }
  });
});



app.listen(port, () => {
  console.log(`O servidor esta rodando em http://localhost:${port}`);
});
