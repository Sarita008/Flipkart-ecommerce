import mongoose from 'mongoose';

const counterSchema = new mongoose.Schema({
    _id: String, // Name of the collection or model (e.g., "product")
    seq: Number  // Sequence number
});

const Counter = mongoose.model('counter', counterSchema);

export default Counter;
