import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import './App.css';
import PdfDocument from './components/Invoice';
import InvoiceData from './jsonData/InvoiceData';

function App() {
  const fileName = "Invoice.pdf";

  return (
    <div className="App">
      <PDFViewer width={window.innerWidth - 100} height={window.innerHeight - 100} showToolbar={false}>
        <PdfDocument invoicedata={InvoiceData} />
      </PDFViewer>

      <div className='download-link'>
        <PDFDownloadLink
          document={<PdfDocument invoicedata={InvoiceData} />}
          fileName={fileName}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading..." : "Download Invoice"
          }
        </PDFDownloadLink>
      </div>
    </div>
  );
}

export default App;
