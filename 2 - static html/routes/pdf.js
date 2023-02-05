const router = require('express').Router();
const { createPDF } = require('../controllers/pdf');

router.get('/getPdf', createPDF);

module.exports = router;