import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://saritasharma8201:sarita@cluster0.ulz2swn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;