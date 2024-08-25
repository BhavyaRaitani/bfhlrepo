const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Routes
const bfhlRoutes = require('./routes/bfhl');
app.use('/bfhl', bfhlRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
