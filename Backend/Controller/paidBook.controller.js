import paidBook from '../model/paidBook.model.js';

export const getPaidBook = async (req, res) => {
    try {
        const books = await paidBook.find();
        res.status(200).json(books);
    } catch (error) {
        console.log('Error', error);
        res.status(500).json(error);
    }
};