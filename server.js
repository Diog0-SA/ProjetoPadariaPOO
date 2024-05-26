// Importação dos modulos:
const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express();

// Chamar arquivos estáticos,
app.use(express.static('public'));

// Criar as rotas / serviços:
app.get('/', (req, res) => {
    fs.readFile(path.join(__dirname, 'public/index.html'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro Interno do Servidor");
        }else{
            res.status(200).type('text/html').send(data);
        }
    })
})

app.get('/sobrenos', (req, res) => {
    fs.readFile(path.join(__dirname, 'public/sobrenos.html'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro Interno do Servidor");
        }else{
            res.status(200).type('text/html').send(data);
        }
    })
})

app.get('/appPadaria.js', (req, res) => {
    fs.readFile(path.join(__dirname, 'public/appPadaria.js'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro Interno do Servidor");
        }else{
            res.status(200).type('text/javascript').send(data);
        }
    })
})

app.get('/carrinho', (req, res) => {
    fs.readFile(path.join(__dirname, 'public/carrinho.html'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro Interno do Servidor");
        }else{
            res.status(200).type('text/html').send(data);
        }
    })
})

app.get('/login', (req, res) => {
    fs.readFile(path.join(__dirname, 'public/login.html'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro Interno do Servidor");
        }else{
            res.status(200).type('text/html').send(data);
        }
    })
})

// Configuração do Servidor:
const PORT = 4500;
app.listen(PORT, () =>{
    console.log(`[OK] - Servidor executando em: ${PORT}`);
});
