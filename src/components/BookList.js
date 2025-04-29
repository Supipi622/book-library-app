import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books, viewMode, onEdit, onDelete }) => {
  return (
    <div className={`grid ${viewMode === 'grid' ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : 'grid-cols-1'} gap-6 p-4`}>
      {books.map((book) => (
        <BookCard 
          key={book.id} 
          book={book} 
          onEdit={onEdit} 
          onDelete={onDelete} 
        />
      ))}
    </div>
  );
};

export default BookList;
