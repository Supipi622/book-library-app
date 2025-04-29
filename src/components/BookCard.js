import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const BookCard = ({ book, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
      <img
        src={book.coverImage}
        alt={book.title}
        className="h-40 w-28 object-cover rounded-md mb-3"
      />
      <h2 className="text-lg font-semibold text-center">{book.title}</h2>
      <p className="text-gray-600">{book.author}</p>
      <p className="text-yellow-500">⭐ {book.rating}</p>
      <p className="text-sm text-gray-500 mt-1">{book.category}</p>

      <div className="flex gap-10 mt-5">
        {/* Edit Icon */}
        <button
          onClick={() => onEdit(book)}
          className="hover:scale-110 transition-transform"
          title="Edit Book"
        >
          <EditIcon style={{ fontSize: '34px', color: '#4CAF50' }} /> {/* Green Pen */}
        </button>

        {/* Delete Icon */}
        <button
          onClick={() => onDelete(book.id)}
          className="hover:scale-110 transition-transform"
          title="Delete Book"
        >
          <DeleteIcon style={{ fontSize: '34px', color: '#F44336' }} /> {/* Red Bin */}
        </button>
      </div>
    </div>
  );
};

export default BookCard;
