const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv')
const multer = require('multer');
const upload = multer();


dotenv.config();

const indexRoutes = require('./routes/index')

const app = express();

app.set("view engine","ejs");
app.set("views","views")
app.use(bodyParser.urlencoded({extended:true}))
app.use(upload.array()); 
app.use("/",indexRoutes)

app.listen(process.env.PORT);
console.log(`Server started at port ${process.env.PORT}`);