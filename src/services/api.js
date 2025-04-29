import axios from 'axios';

const API_URL = 'http://localhost:3005/books';

// Get all books
export const getBooks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Add a new book
export const addBook = async (book) => {
  await axios.post(API_URL, book);
};

// Update a book
export const updateBook = async (id, updatedBook) => {
  await axios.put(`${API_URL}/${id}`, updatedBook);
};

// Delete a book
export const deleteBook = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
