const express = require('express')
const bodyParser = require('body-parser')
const routes = require("./routes");

const app = express()
const PORT = 3000


bodyParser(app);
routes(app);

app.listen(PORT, () => {
    console.log(`Example app listening http://localhost:${PORT}`)
})