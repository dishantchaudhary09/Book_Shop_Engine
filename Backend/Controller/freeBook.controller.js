import freeBook from '../model/freeBook.model.js'

export const getFreeBook = async (req, res) => {
    try {
        const books = await freeBook.find();
        res.status(200).json(books);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};