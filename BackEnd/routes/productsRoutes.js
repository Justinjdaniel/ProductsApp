const express = require('express');
const ProductData = require('../src/model/Productdata');
const productsRouter = express.Router();

productsRouter.get('/',(req,res)=>{
    // res.header("Acess-Control-Allow-Orgin","*");
    // res.header("Acess-Control-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
    ProductData.find()
                .then((products)=>{
                    res.send(products);
                });
});

productsRouter.get('/edit/:id',(req,res)=>{
    const id = req.params.id;
    console.log(id);
    ProductData.findById(id)
    .then((product)=>{
        res.send(product);
    });
});

productsRouter.post('/update/:id',(req,res)=>{
    const id = req.params.id;
    ProductData.findById(id, (err,proData)=>{
        if(!proData){
            res.status(404).send("Record Not Found");
        }
        else{
            proData.productId = req.body.productId,
            proData.productName = req.body.productName,
            proData.productCode = req.body.productCode,
            proData.releaseDate = req.body.releaseDate,
            proData.description = req.body.description,
            proData.price = req.body.price,
            proData.starRating = req.bodystarRating,
            proData.imageUrl = req.body.imageUrl

            proData.save().then(proData =>{
                res.send('Update Complete');
            })
            .catch(err =>{
                res.status(400).send("Unable to Update the Database");
            });
        }
    });
});

productsRouter.get('/delete/:id',(req,res)=>{
    const id = req.params.id;
    ProductData.findByIdAndRemove({ _id: id}, (err,proData)=>{
        if(err){
            res.send(err);
        } else{
            res.send('Successfully Removed');
        }
    });
});

module.exports = productsRouter;