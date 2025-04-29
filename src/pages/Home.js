import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import BookList from '../components/BookList';
import BookForm from '../components/BookForm';
import Modal from '../components/Modal'; // 👉 you need to create this simple modal component
import { getBooks, addBook, updateBook, deleteBook } from '../services/api';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const data = await getBooks();
    setBooks(data);
  };

  const handleAddOrEdit = async (book) => {
    if (selectedBook) {
      await updateBook(book.id, book);
    } else {
      await addBook(book);
    }
    fetchBooks();
    setSelectedBook(null);
    setShowForm(false);
  };

  const handleDelete = async (id) => {
    await deleteBook(id);
    fetchBooks();
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Header Part */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        viewMode={viewMode}
        toggleView={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
      />

<div className="bg-gray-100 pt-24 pb-10 px-4 md:px-10 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:gap-6 font-poppins">
  {/* Left Side - Text & Button */}
  <div className="flex-1 text-left md:pl-4">
    <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-4 leading-tight">
      Knowledge Collection
    </h1>
    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
      A Microsoft Certified Trainer (MCT) and Certified Speaking Professional (CSP), Dawn Bjork is known as 
      The Software Pro® for her work as a productivity speaker, software trainer, virtual presenter, and author 
      of numerous training courses and videos. She is also a certified Microsoft Office Specialist Master (MOSM) 
      and Certified Virtual Presenter (CVP).
    </p>
    <button
      onClick={() => {
        setSelectedBook(null);
        setShowForm(true);
      }}
      className="bg-blue-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-blue-700 transition"
    >
      Add New Book
    </button>
  </div>

  {/* Right Side - Image */}
  <div className="flex-1 w-full">
    <img
      src="/HomeImage.jpg"
      alt="Knowledge Collection"
      className="w-full h-auto max-h-96 object-cover rounded-lg shadow-md"
    />
  </div>
</div>


      {/* Popup Modal for Form */}
      <Modal isOpen={showForm} onClose={() => { setShowForm(false); setSelectedBook(null); }}>
        <BookForm
          onSubmit={handleAddOrEdit}
          selectedBook={selectedBook}
          onCancel={() => {
            setSelectedBook(null);
            setShowForm(false);
          }}
        />
      </Modal>

      {/* Book List */}
      <BookList
        books={filteredBooks}
        viewMode={viewMode}
        onEdit={(book) => {
          setSelectedBook(book);
          setShowForm(true);
        }}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Home;
