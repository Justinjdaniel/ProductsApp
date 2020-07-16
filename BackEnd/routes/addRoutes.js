const express = require('express');
const ProductData = require('../src/model/Productdata');
const addRouter = express.Router();

addRouter.post('/',(req,res)=>{
    // res.header("Acess-Control-Allow-Orgin","*");
    // res.header("Acess-Control-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
    var product = {
        productId : req.body.product.productId,
        productName : req.body.product.productName,
        productCode : req.body.product.productCode,
        releaseDate : req.body.product.releaseDate,
        description : req.body.product.description,
        price : req.body.product.price,
        starRating : req.body.product.starRating,
        imageUrl : req.body.product.imageUrl,
    }
    var product = new ProductData(product);
    product.save().then((err,data)=>{
        if(err){
            console.log(err);
        } else{
            res.send('Add Complete');
        }
    });
});

module.exports = addRouter;