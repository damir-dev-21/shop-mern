const {Schema,model} = require('mongoose');

const products = new Schema({
    products:[
        {
            id:{
                type:Number,
                required:true
            },
            category:{
                type:String,
                required:true
            },
            products:[
                {
                    id:{
                        type:Number,
                        required:true
                    },
                    title:{
                        type:String,
                        required:true,
                    },
                    price:{
                        type:Number,
                        required:true
                    },
                    image:{
                        type:String,
                        required:true,
                    },
                    size:[
                        {
                            value:{
                                type:String,
                                required:true,
                            },
                            label:{
                                type:String,
                                required:true
                            }
                        }
                    ]
                }
            ]
        }
    ]
});

module.exports = model('Products',products);