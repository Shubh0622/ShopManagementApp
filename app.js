const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const contactRouter = require('./routes/contact');
const successRouter = require('./routes/success');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin', adminRouter);
app.use(shopRouter);
app.use(successRouter);
app.use(contactRouter);
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','page-not-found.html'));
})
app.listen(4000);