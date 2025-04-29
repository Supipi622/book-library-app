
# 📚 Interactive Book Library
This project is a Book Library Web Application where users can add, edit, and delete books. It provides a search feature, view mode toggling (Grid/List), and displays books with their details.

## Table of Contents
* Technologies Used

* Installation

* Project Structure

* How to Use

* Contributing


### Technologies Used
 - React for building the UI components.

 - Tailwind CSS for styling the application.

 - React Icons for icons.

 - Custom Font (Poppins) for modern typography.

 - API Calls to interact with a mock or real backend service for fetching and modifying book data.

### Installation
Follow these steps to get the project up and running locally.

1 . Clone the repository:
          git clone https://github.com/Supipi622/book-library-app.git
          
2 . Go into the project folder:
          cd your-project-folder
          
3. Install dependencies:
          npm install
          
4. Start the React app:
          npm start
          
This will run the app on http://localhost:3000/.

## Optional: Backend Setup (Using JSON Server)
   If you want to save the book data persistently (like a real backend),
you can run a local JSON server.

Install JSON Server globally (only if not installed):
       npm install -g json-server
       Start the server:
       npx json-server --watch db.json --port 3005
      
This will run the fake backend at http://localhost:3005/books.

*** Important ***
Make sure your api.js is pointing to http://localhost:3005.



## Project Structure
/public: Contains the index.html file and other static assets (like images).

/src: Contains the source code.

/components: Contains all the reusable components (Header, BookList, BookCard, etc.).

/services: Contains the API functions to interact with backend services (getBooks, addBook, etc.).

/App.js: Main component where everything is connected.

/index.css: Custom styles (if needed).

tailwind.config.js: Tailwind CSS configuration file.

## How to Use
1. Add a New Book
Click on the "Add New Book" button.

A form will appear where you can enter details like Title, Author, Rating, and Category.

Once submitted, the new book will be added to the list.

2. Search Books
Use the search bar at the top to search books by Title or Author.

3. Edit a Book
Click the Edit icon on any book card to open the form and modify the book’s information.

Submit the form after making the changes.

4. Delete a Book
Click the Delete icon on any book card to remove the book from the list.

5. Toggle View Mode
Use the Grid/List button to switch between grid view and list view.


## Contributing
Fork the repository.

Create a new branch (git checkout -b feature-name).

Commit your changes (git commit -am 'Add new feature').

Push to the branch (git push origin feature-name).

Create a new Pull Request.

