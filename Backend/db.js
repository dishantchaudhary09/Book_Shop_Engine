import mongoose from 'mongoose';
import dns from 'dns';

dns.setServers(['8.8.8.8', '1.1.1.1']);
console.log('Using DNS servers:', dns.getServers());

const connectDB = async () => {
    if (!process.env.MONGO_URI) {
        throw new Error('MONGO_URI not set. Please configure the database connection string in environment variables.');
    }

    try {
        console.log("URI =", process.env.MONGO_URI);
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Mongo is connected');
    } catch (error) {
        console.log('Mongo connection error:', error);
        throw error;
    }
};

export default connectDB