import mongoose from 'mongoose';
import { AutoIncrement } from 'mongoose-sequence';

const productSchema = new mongoose.Schema({
    id: String,
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String
});

// Add auto-increment plugin
productSchema.plugin(AutoIncrement, { inc_field: 'id' });

const products = mongoose.model('product', productSchema);

export default products;
