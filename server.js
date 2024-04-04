const express = require('express')
const app = express();
const cors = require('cors');
const apiRoutes = require("./routers");
const bodyParser = require('body-parser');
const path = require('path');
const conn = require('./configs/dbmysql');
const port = 5000;


app.use("/assets", express.static(path.join(__dirname, "/assets")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

apiRoutes(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

module.exports = conn;