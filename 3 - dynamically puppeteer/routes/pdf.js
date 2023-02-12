const router = require('express').Router();
const { createPdf, getUserData } = require('../controllers/pdf');

router.post('/getData', getUserData);
router.get('/getPdf', createPdf);

module.exports = router