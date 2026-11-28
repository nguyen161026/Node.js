
const express = require('express');
const path = require('path');

const app = express();

// Middleware doc du lieu form
app.use(express.urlencoded({ extended: true }));

// Su dung CSS va cac file tinh
app.use(express.static(path.join(__dirname, 'public')));

// Cau hinh Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Ket noi Controller
const calculatorController =
    require('./controllers/calculatorController');

app.use('/calculator', calculatorController);

// Trang chu
app.get('/', (req, res) => {
    res.redirect('/calculator');
});

// Xu ly trang khong ton tai
app.use((req, res) => {
    res.status(404).send('Khong tim thay trang!');
});

// Middleware xu ly loi
app.use((err, req, res, next) => {
    console.error(err.message);

    res.status(err.status || 500).send(`
        <h1>Co loi xay ra!</h1>
        <p>${err.message}</p>
        <a href="/calculator">Quay lai may tinh</a>
    `);
});

// Khoi dong server
app.listen(3000, () => {
    console.log('Server dang chay tai http://localhost:3000');
});
