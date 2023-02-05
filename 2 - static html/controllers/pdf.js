const puppeteer = require('puppeteer');
const Fs = require('fs');
const Path = require('path');
const Util = require('util');
const ReadFile = Util.promisify(Fs.readFile);

// Option 2: PDF from a static html
const html = async () => {
    try {
        const htmlPath = Path.join(__dirname, '../sample.html');
        const content = await ReadFile(htmlPath, 'utf-8');
        return content
    } catch (error) {
        console.log('Cannot read html file');
    }
};

// Code for Option 2:
const createPDF = async (req, res) => {
    html().then(async (data) => {

        // Create browser instance
        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        })

        const convertPage = await browser.newPage();

        await convertPage.setContent(data);

        // Download the PDF
        const pdfBuffer = await convertPage.pdf({
            format: 'A4',
            printBackground: true
        })

        res.set('Content-Type', 'application/pdf');
        res.status(201).send(Buffer.from(pdfBuffer, 'binary'));
    })
};

module.exports = {
    createPDF
}