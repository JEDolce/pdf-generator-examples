# PDF Generator

Test application to generate a pdf using differente technologies:

 - Option 1: Generate pdf from a webpage (Puppeteer)
 - Option 2: Generate pdf from sample.html (Puppeteer)
 - Option 3: Generate pdf dynamically with user data from an invoice template (Puppeteer)
 - Option 4: Generate pdf dynamically with user data from an invoice template (Html-pdf)
 - Option 5: Generate pdf dynamically with user data on the frontend (React-pdf)

On the frontend, in the first two options, there is a single button that triggers the process of 
creating and saving the pdf document. The action is communicated through axios to the backend, 
where the pdf generation code is located. 

The third and fourth option, also cotains a form where the user completes the data passed to the 
server and generates the pdf.

Finally, the fifth option creates an invoice pdf on the frontend with user data from a json file. 

## Technologies used

- Node & Express
- Handlebars
- Html-pdf
- Puppeteer
- React
- React-pdf

## Setup

This project requires the following dependecies. Some are common to all options and others are specific,
depending on the project requeriments.
    
    "body-parser": "^1.20.1"
    "cors": "^2.8.5"
    "dotenv": "^16.0.1"
    "express": "^4.18.2"
    "file-saver": "^2.0.5"
    "fs-extra": "^11.1.0"
    "handlebars": "^4.7.7"
    "html-pdf": "^3.0.1"
    "nodemon": "^2.0.18"
    "puppeteer": "^19.6.1"
    "axios": "^1.2.5"
    "events": "^3.3.0"
    "react": "^18.2.0"
    "react-dom": "^18.2.0"
    "react-icons": "^4.7.1"
    "react-router-dom": "^6.8.1"
    "@react-pdf/renderer": "^3.1.3"

To install the project, just download it directly from terminal with "git clone https://github.com/JEDolce/pdf-generator-examples.git", then open the folder corresponding to the option you want to install and run npm install or yarn add. 

