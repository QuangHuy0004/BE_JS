const express = require('express')
const app = express()
const apiRoutes = require("./routers");
const cors = require('cors')
const bodyParser = require("body-parser");
const fileupload = require("express-fileupload");
const path = require("path");
const port = 8080
app.use(cors())
app.use(fileupload());
app.use("/assets", express.static(path.join(__dirname, "/assets")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
apiRoutes(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})