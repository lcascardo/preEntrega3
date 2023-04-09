import mongoose from "mongoose";

const cartsCollection = 'carts';

const cartsSchema = new mongoose.Schema({
    products: {
        type: [
            {
                product: {
                    type: mongoose.SchemaTypes.ObjectId,
                    ref: "products",
                    default:null
                },
                quantity: {
                    type: Number || 1,
                    require: true,
                }
            }
        ],
        default: [],
        require: true
    },

    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'users',
        default: null
    }
})

const cartsModel = mongoose.model(cartsCollection, cartsSchema);

export default cartsModel;