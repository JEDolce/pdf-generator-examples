import axios from 'axios';

const apiURL = "http://localhost:8080/api/pdf/getPdf";

// HTTP Service
axios.interceptors.response.use(null, error => {
    const errorCode =
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500;

    if (!errorCode) {
        console.log("Something went wrong");
    }

    return Promise.reject(error);
});

const pdfService = async () => {
    const response = await axios.get(apiURL, {
        responseType: 'blob',
        headers: {
            Accept: 'application/pdf'
        }
    });

    return response;
};

export default pdfService;