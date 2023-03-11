const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 8080;

const corsOptions = {
    origin: "http://localhost:8081"
};

async function init() {
    app.use(cors(corsOptions));
    app.use(bodyparser.json({ limit: '50mb' }));
    app.use(bodyparser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

    app.get("/", (req, res) => {
        res.json({ message: "Proyecto Teorias Base de Datos"});
    });

    app.listen(PORT, () => {
        console.log(`Server is on Port: ${PORT}.`);
    });

    const approuting = require('./modules');
    const appmodules = new approuting(app);
    appmodules.init();
}
init();
module.exports = app;