const cors = require('cors');

const whiteList = new Set(["http://localhost:5173/"]);

const corsOptions = {
    optionsSuccessStatus: 200,
    origin: (origin, callback) => {
        if (whiteList.has(origin)) {
            callback(null, true)
        } else {
            callback(new Error("Blocked by CORS"))
        }
    },
    credetials: true
}

module.exports = cors(corsOptions);