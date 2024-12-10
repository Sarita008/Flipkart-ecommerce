import mongoose from 'mongoose';
import pkg from 'mongoose-sequence'; // Import the entire module
const { AutoIncrement } = pkg;      // Destructure AutoIncrement from the default export

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

// Add the auto-increment plugin
productSchema.plugin(AutoIncrement, { inc_field: 'id' });

const products = mongoose.model('product', productSchema);

export default products;
