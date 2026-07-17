const express = require('express');
const path = require('path');

const app = express();

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index', { page: 'home' });
});

app.get('/about', (req, res) => {
    res.render('about', { page: 'about' });
});

// app.get('/explore', (req, res) => {
//     res.render('explore', { page: 'explore' });
// });

// app.get('/marketplace', (req, res) => {
//     res.render('marketplace', { page: 'marketplace' });
// });

app.get('/help', (req, res) => {
    res.render('help', { page: 'help' });
});

app.get('/login', (req, res) => {
    res.render('login', { page: 'login' });
});

app.get('/register', (req, res) => {
    res.render('register', { page: 'register' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`PawTrade running at http://localhost:${PORT}`);
});
