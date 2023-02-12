const puppeteer = require("puppeteer");
const hbs = require("handlebars");
const fs = require("fs-extra");
const path = require("path");
// const data = require('../data.json');

// Get data from user
const getUserData = async (req, res) => {
    try {
        const { price1, price2 } = req.body
        const totalPrice = parseInt(price1) + parseInt(price2)
        const dataObj = await { ...req.body, totalPrice }
        console.log(dataObj)
    } catch (error) {
        console.log(error)
    }
};

// Abria que guardar los datos del ususario en una db
// o en local storage

// Get the data and template
const compileData = async (templateName, dataObj) => {
    try {
        const filePath = path.join(process.cwd(), 'templates', `${templateName}.hbs`)
        const html = await fs.readFile(filePath, 'utf-8')
        return hbs.compile(html)(dataObj)
    } catch (error) {
        console.log(error)
    }
};

// Create PDF with Puppeteer
const createPdf = async (req, res) => {

    try {
        const browser = await puppeteer.launch();

        const page = await browser.newPage();

        const content = await compileData('ticket', dataObj);

        await page.setContent(content);

        const pdfBuffer = await page.pdf({
            path: 'output.pdf',
            format: 'A4',
            printBackground: true,
        });

        console.log('PDF Created');

        // res.set('Content-Type', 'application/pdf');
        // res.status(201).send(Buffer.from(pdfBuffer, 'binary'));

    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getUserData,
    createPdf
};