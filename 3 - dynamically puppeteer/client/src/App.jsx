import { useState } from 'react';
import pdfService from '../pdfService';
import './App.css'

function App() {
  const [ticket, setTicket] = useState({
    name: '',
    receiptId: 0,
    price1: 0,
    price2: 0,
  });

  const handleChange = (e) => {
    setTicket({ ...ticket, [e.target.name]: e.target.value })
  };

  const downloadPDFfile = async () => {
    await pdfService.sendData(ticket)
      .then(pdfService.getPdf())
      .then(response => {
        console.log(res.data);
        const filename = "pdfPrueba.pdf";

        console.log('lalala')

        const blobObj = new Blob([response.data], { type: 'application/pdf' });
        const anchorLink = document.createElement('a');
        anchorLink.href = window.URL.createObjectURL(blobObj);
        anchorLink.setAttribute('download', filename);
        anchorLink.click();
      }).catch(error => {
        console.log(error)
      })
  }

  return (
    <div className="App">
      <input type="text" placeholder="Name" name="name" onChange={handleChange} />
      <input type="number" placeholder="Receipt ID" name="receiptId" onChange={handleChange} />
      <input type="number" placeholder="Price 1" name="price1" onChange={handleChange} />
      <input type="number" placeholder="Price 2" name="price2" onChange={handleChange} />
      <button onClick={downloadPDFfile}>Download PDF</button>
    </div>
  )
}

export default App
