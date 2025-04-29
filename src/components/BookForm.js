import React, { useState, useEffect } from 'react';

const BookForm = ({ onSubmit, selectedBook, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    rating: '',
    category: '',
    coverImage: ''
  });

  useEffect(() => {
    if (selectedBook) {
      setFormData(selectedBook);
    }
  }, [selectedBook]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      title: '',
      author: '',
      rating: '',
      category: '',
      coverImage: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white shadow rounded mt-6">
      <div className="flex flex-col gap-4">
        <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" className="border p-2 rounded" required />
        <input name="author" value={formData.author} onChange={handleChange} placeholder="Author" className="border p-2 rounded" required />
        <input name="rating" value={formData.rating} onChange={handleChange} placeholder="Rating" className="border p-2 rounded" required />
        <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" className="border p-2 rounded" required />
        <input name="coverImage" value={formData.coverImage} onChange={handleChange} placeholder="Cover Image URL" className="border p-2 rounded" required />

        <div className="flex gap-4">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            {selectedBook ? 'Update Book' : 'Add Book'}
          </button>
          <button type="button" onClick={onCancel} className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500">
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default BookForm;
