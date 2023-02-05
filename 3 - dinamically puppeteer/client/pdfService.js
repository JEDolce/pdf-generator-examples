import axios from 'axios'

const API_URL = 'http://localhost:8080/api/pdf';

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


// const pdfService = (ticket) => {
//     axios.post(API_URL + '/getData', ticket)
//         .then(() => axios.get(API_URL + '/getPdf', {
//             responseType: 'blob',
//             headers: {
//                 Accept: 'application/pdf'
//             },
//         })
//         )
// };


// Post user data
const sendData = async (ticket) => {
    const response = await axios.post(API_URL + '/getData', ticket)

    return response
};

// Get pdf
const getPdf = async () => {
    const response = await axios.get(API_URL + '/getPdf', {
        responseType: 'blob',
        headers: {
            Accept: 'application/pdf'
        }
    })

    return response
};

const pdfService = {
    sendData,
    getPdf,
};

export default pdfService;
