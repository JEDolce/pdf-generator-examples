const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const pdfRoute = require('./routes/pdf');

// Initiallization
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use('/api/pdf', pdfRoute);

// Server
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});



