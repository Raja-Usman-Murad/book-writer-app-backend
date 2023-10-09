import Book from "../models/bookSchema.js";

const getBook = async (req, res) => {
  try {
    const books = await Book.find();

    return res.status(200).json({
      message: "Book Fetched Successfully",
      payload: books,
      success: true,
    });
  } catch (error) {
    res.status(404).json({ message: error.message, success: false });
  }
};

const createBook = async (req, res) => {
  try {
    const { title, image, description } = req.body;
    if (!title || !image || !description) {
      return res.status(404).json({
        message: "Please Fill all Fields",
        success: false,
      });
    }

    const book = await Book.create({ title, image, description });

    return res.status(201).json({
      message: "Book Created Successfully",
      payload: book,
      success: true,
    });
  } catch (error) {
    res.status(404).json({ message: error.message, success: false });
  }
};

const updateBook = async (req, res) => {
  res.send("update book route");
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({
        message: "Book Not Found",
        success: false,
      });
    }

    const deletedBook = await Book.findByIdAndDelete(id);

    return res.status(200).json({
      message: "Book Deleted Successfully",
      payload: deletedBook,
      success: true,
    });
  } catch (error) {
    res.status(404).json({ message: error.message, success: false });
  }
};

export default {
  getBook,
  createBook,
  updateBook,
  deleteBook,
};
