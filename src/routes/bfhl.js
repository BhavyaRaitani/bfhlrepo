const express = require('express');
const router = express.Router();

// GET /bfhl - returns operation_code
router.get('/', (req, res) => {
    res.status(200).json({ "operation_code": 1 });
});

// POST /bfhl - process input data
router.post('/', (req, res) => {
    const data = req.body.data;
    const user_id = process.env.USER_ID;
    const email = process.env.EMAIL;
    const roll_number = process.env.ROLL_NUMBER;

    let numbers = [];
    let alphabets = [];
    let highest_lowercase_alphabet = [];

    for (let item of data) {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (/[a-zA-Z]/.test(item)) {
            alphabets.push(item);
            if (/[a-z]/.test(item) && (!highest_lowercase_alphabet[0] || item > highest_lowercase_alphabet[0])) {
                highest_lowercase_alphabet[0] = item;
            }
        }
    }

    res.status(200).json({
        "is_success": true,
        "user_id": user_id,
        "email": email,
        "roll_number": roll_number,
        "numbers": numbers,
        "alphabets": alphabets,
        "highest_lowercase_alphabet": highest_lowercase_alphabet
    });
});

module.exports = router;
