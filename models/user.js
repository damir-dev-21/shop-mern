const {Schema,model, Types} = require('mongoose');

const user = new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    orders:[
        {
            type:Types.ObjectId,
            ref:'Order'
        }
    ]
})

module.exports = model('User',user);