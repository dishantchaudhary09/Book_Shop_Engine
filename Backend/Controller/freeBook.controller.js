import freeBook from '../model/freeBook.model.js'

export const getFreeBook = async (req, res) => {
    try {
      const books = await freeBook.find();
      res.status(200).json(books);
    } catch (error) {
      console.error("Error fetching free books:", error);
      res
        .status(500)
        .json({ message: error.message || "Unable to fetch free books" });
    }
};