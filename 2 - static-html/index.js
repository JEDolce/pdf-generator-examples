const express = require('express');
const pdfRoute = require('./routes/pdf');
const cors = require('cors');
// const corsHeaders = require('./middlewares/cors');

// Initiallization
const PORT = process.env.PORT || 8080;
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.options('*', corsHeaders);
// app.use(corsHeaders);

// Routes
app.use('/api/pdf', pdfRoute);

// Server start
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});