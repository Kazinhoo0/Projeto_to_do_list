const express = require('express')
const app = express();
const path = require('path')
const port = 3001



app.use(express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'login.html'));
})


app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'Index.html'));
})


app.get('/settings', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'Settings.html'));
})


app.get('/criarlembretes', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'CriarLembretes.html'));
})


app.get('/criarnovaconta', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'CriarNovaConta.html'));
})


app.get('/esquecisenha', (req, res) => {
    res.sendFile(path.join(__dirname, '../rotes', 'Esquecisenha.html'));
})


app.get('/esquecisenha', (req, res) => {
    res.sendFile(path.join(__dirname, '../rotes', 'Esquecisenha.html'));
})


app.get('/confirmaremail', (req, res) => {
    res.sendFile(path.join(__dirname, '../rotes', 'ConfirmarEmail.html'));
})


app.listen(port, () => {
    console.log('Servidor iniciado com sucesso!')
})