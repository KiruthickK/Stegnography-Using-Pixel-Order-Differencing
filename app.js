const express = require('express');
const app = express();

// middleware
app.use(express.static('public'));
app.use("/scripts", express.static(__dirname + '/scripts'));
app.use(express.json());

// view engine
app.set('view engine', 'ejs');

app.listen(process.env.PORT || 3000, () => console.log('listening ...'));
app.get('/', (req, res) => res.render('home'));
app.get('/decrypt', (req, res) => res.render('Decrypt'));
app.get('/encrypt', (req, res) => res.render('Encrypt'));