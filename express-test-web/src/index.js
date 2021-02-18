const express = require("express");
const colors = require("colors");
const morgan = require('morgan');
const app = express();
const path = require("path")

//settings
app.set('port', '5000');
app.use(morgan('dev'));
app.set('views', path.join(__dirname, 'views'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')


//routes 
require('./routes/routes.js');
app.use(require('./routes/routes.js'));

//static files
app.use(express.static(path.join(__dirname, 'public')))


app.listen(app.get("port"), () => {
    console.log(`Servidor activo puerto ${app.get("port")}`.yellow)
})