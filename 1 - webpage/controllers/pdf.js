const puppeteer = require('puppeteer');

// Option 1: PDF from a webpage
const webURL = "https://superlative-taffy-9d252d.netlify.app/";
const optionsPDF = { width: 1024, height: 768 };

// Code for Option 1:
const puppeteerPDF = async (webURL, optionsPDF) => {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const coverPage = await browser.newPage();

    await coverPage.goto(webURL, { waitUntil: 'domcontentloaded' });

    const pdfBuffer = await coverPage.pdf({
        printBackground: true,
        width: optionsPDF.width,
        height: optionsPDF.height
    });

    return pdfBuffer;
};

const createPDF = async (req, res) => {
    await puppeteerPDF(webURL, optionsPDF).then((pdfdata) => {
        res.set('Content-Type', 'application/pdf');
        res.status(201).send(Buffer.from(pdfdata, 'binary'));
    }).catch((error) => {
        console.log(error);
    });
};

module.exports = {
    createPDF
}