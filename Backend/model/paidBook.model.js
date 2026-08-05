import mongoose from 'mongoose';

const paidBookSchema = new mongoose.Schema({
  id: Number,
  name: String,
  title: String,
  price: String,
  category: String,
  image: String
});

const paidBook = mongoose.model('paidBook', paidBookSchema);
export default paidBook;