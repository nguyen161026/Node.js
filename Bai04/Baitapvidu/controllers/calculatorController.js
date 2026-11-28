
const express = require('express');
const router = express.Router();

const calculatorModel =
    require('../models/calculatorModel');

// Trang may tinh
router.get('/', (req, res) => {
    res.render('calculator');
});

// Xu ly tinh toan
router.post('/calculate', (req, res, next) => {

    try {
        const { num1, num2, operation } = req.body;

        const result = calculatorModel.calculate(
            num1,
            num2,
            operation
        );

        res.render('calculator', {
            result: result,
            num1: num1,
            num2: num2,
            operation: operation
        });

    } catch (err) {
        err.status = 400;
        next(err);
    }
});

module.exports = router;
