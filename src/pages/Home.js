import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import BookList from "../components/BookList";
import BookForm from "../components/BookForm";
import Modal from "../components/Modal";
import { getBooks, addBook, updateBook, deleteBook } from "../services/api";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [viewMode, setViewMode] = useState("grid");
  const [searchQuery, setSearchQuery] = useState("");
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

  const filteredBooks = books.filter(
    (book) =>
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
        toggleView={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
      />

      <div className="bg-gray-100 pt-24 pb-10 px-4 md:px-10 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:gap-6 font-poppins">
        {/* Left Side - Text & Button */}
        <div className="flex-1 text-left md:pl-0 animate-slideInLeft">
          <h1 className="text-4xl font-extrabold text-black mb-4 leading-tight animate-fadeInFast">
            Knowledge Collection
          </h1>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 animate-fadeInMedium">
            Welcome to Knowledge Collection — your personal digital library.
            Easily organize, search, and manage all your favorite books in one
            place. Whether you're a student, a reader, or a lifelong learner,
            this app helps you keep your reading journey structured and
            inspiring.
          </p>
          <button
            onClick={() => {
              setSelectedBook(null);
              setShowForm(true);
            }}
            className="bg-blue-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-blue-700 transition animate-fadeInSlow"
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
      <Modal
        isOpen={showForm}
        onClose={() => {
          setShowForm(false);
          setSelectedBook(null);
        }}
      >
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
