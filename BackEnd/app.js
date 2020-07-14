const express = require('express');
var app = new express();
const cors = require('cors');
var bodyParser = require('body-parser');

const userRouter =  require('./routes/user');
const productsRouter = require('./routes/productsRoutes');
const addRouter = require('./routes/addRoutes');

app.use(cors());
app.use(bodyParser.json());

app.use('/user',userRouter)
app.use('/products',productsRouter);
app.use('/insert',addRouter);


app.listen(3000, function(){
    console.log('Server running in localhost:3000');
});