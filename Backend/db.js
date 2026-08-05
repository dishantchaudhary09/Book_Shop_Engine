import mongoose from 'mongoose';

const connectDB = async () => {
    if (!process.env.MONGO_URI) {
        console.log('MONGO_URI not set. Skipping DB connection for now.');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Mongo is connected');
    } catch (error) {
        console.log('Mongo connection error:', error);
    }
};

export default connectDB