
const express = require("express")
const app = express()
const db = require('./src/configDb/configDb.js');
const router = require('./src/route/index.js');

// connect to db
db.connect();
// config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
router(app);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(` app listening on ${port}`);
});