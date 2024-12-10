import mongoose from 'mongoose';
import Counter from './cartSchema.js';

const productSchema = new mongoose.Schema({
    id: Number, // Auto-incremented field
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String
});

productSchema.pre('save', async function (next) {
    if (this.isNew) {
        const counter = await Counter.findByIdAndUpdate(
            { _id: 'product' }, // Counter name
            { $inc: { seq: 1 } }, // Increment by 1
            { new: true, upsert: true } // Create if doesn't exist
        );
        this.id = counter.seq;
    }
    next();
});

const products = mongoose.model('product', productSchema);

export default products;
