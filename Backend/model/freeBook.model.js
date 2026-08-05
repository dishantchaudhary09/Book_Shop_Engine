import mongoose from "mongoose";

const freeBookSchema = new mongoose.Schema({
  id: Number, 
  name: String,
  title: String,
  price: String,
  category: String,
  image: String
});

const freeBook = mongoose.model("freeBook", freeBookSchema)
export default freeBook