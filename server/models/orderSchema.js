const mongoose=require('mongoose')

const {Schema}=mongoose

const products = new Schema({
    
        quantity:{type:Number,default:0},
        washing: { type: Boolean, default: false },
        ironing: { type: Boolean, default: false },
        drywash: { type: Boolean, default: false },
        chemicalwash: { type: Boolean, default: false },
        price:{type:Number}  
})


const orderSchema = new Schema({
    userId :  {type:Schema.Types.ObjectId,ref:'User'},
    shirts:[products],
    Tshirts:[products],
    trouncers:[products],
    jeans:[products],
    sacuuress:[products],
    joggers:[products],
    others:[products],
    totalPrice:{type:Number},
    totalItems:{type:Number},
    storelocation: {
        type: String,
        default: "Jp nagar",
    },
    city: {
        type: String,
        default: "Bengaluru",
    },
    storephone: {
        type: String,
        default: "9876543211",
    },
    status: {
        type: String,
        default: "Ready to pickup",
    },
    //date:{type:Date,default:Date.now()}
},{timestamps:true})


const Order= mongoose.model('Order',orderSchema)

module.exports=Order 