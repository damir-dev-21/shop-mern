const {Router} = require('express');
const { route } = require('../../webExample/other/express-app/routes/home');
const router = Router();

const Products = require('../models/products');

router.get(async(req,res)=>{
    try{
        const products = await Products.find();

        res.json(products);
    }catch(e){
        res.status(500).json({message:e.message});
    }
})

module.exports = router;
