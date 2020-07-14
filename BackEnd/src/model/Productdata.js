const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const DBLink = 'mongodb+srv://User_Justin:User_Justin@justinj-6njuj.gcp.mongodb.net/ProductDb?retryWrites=true&w=majority';

mongoose.connect(DBLink, (err)=>{
    if(err){
        console.error('Error! '+ err)
    } else{
        console.log('Connected to MongoDB Successfully')
    }
});

var NewProductSchema = new Schema({
    productId : Number,
    productName : String,
    productCode :String,
    releaseDate : String,
    description : String,
    price : Number,
    starRating : Number,
    imageUrl : String
});

var ProductData = mongoose.model('product', NewProductSchema);

module.exports = ProductData;