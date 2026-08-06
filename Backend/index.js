import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js";
import cors from "cors";
import paidBookRoute from "./Routes/paidBook.route.js";
import freeBookRoute from "./Routes/freeBook.rout.js";
import userRegister from "./Routes/register.route.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Routes

app.get("/", (req, res) => {
  res.send("Backend is working 🚀");
});
app.use("/paid-books", paidBookRoute);
app.use("/free-books", freeBookRoute);
app.use("/create-user", userRegister);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Your app is listening on port ${PORT}`);
});
