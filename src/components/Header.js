import React from 'react';
import ViewListIcon from '@mui/icons-material/ViewList';
import GridViewIcon from '@mui/icons-material/GridView';

const Header = ({ searchQuery, setSearchQuery, viewMode, toggleView }) => {
  return (
    <header className="fixed top-0 left-0 w-full flex flex-col md:flex-row justify-between items-center bg-blue-900 text-white p-4 shadow z-50 ">
      <h1 className="text-3xl font-bold">📚 Book Library</h1>
      <div className="flex items-center gap-3 mt-3 md:mt-0">
        <input
          type="text"
          placeholder="Search by title or author..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-3 py-2 rounded-md text-black w-48 md:w-64"
        />
        <button
          onClick={toggleView}
          className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
        >
          {viewMode === 'grid' ? (
            <>
              <GridViewIcon fontSize="small" />
              Grid View
            </>
          ) : (
            <>
             

              <ViewListIcon fontSize="small" />
              List View
            </>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
