import pdfService from '../pdfService';
import './App.css'

function App() {

  const downloadPDFfile = async () => {
    try {
      return pdfService().then((res) => {
        const filename = "pdfPrueba.pdf";

        const blobObj = new Blob([res.data], { type: 'application/pdf' });
        const anchorLink = document.createElement('a');
        anchorLink.href = window.URL.createObjectURL(blobObj);
        anchorLink.setAttribute('download', filename);
        anchorLink.click();
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <button onClick={downloadPDFfile}>Download PDF</button>
    </div>
  )
}

export default App
