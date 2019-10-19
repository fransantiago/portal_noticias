require('dotenv').config();

const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('app/public'));

consign()
    .include('./app/routes')
    .into(app);

app.listen(process.env.PORT, () => {
    console.log(`Server is running.`);
});