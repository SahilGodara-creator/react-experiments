import { useState } from "react";

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" }
  ]);

  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const addBook = () => {
    if (title === "" || author === "") return;

    setBooks([
      ...books,
      { id: Date.now(), title, author }
    ]);

    setTitle("");
    setAuthor("");
  };

  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <div className="page">
      <h1>Library Management System</h1>

      <div className="card">
        <input
          className="search"
          type="text"
          placeholder="Search books..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="row">
          <input
            type="text"
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          <button className="add" onClick={addBook}>
            Add Book
          </button>
        </div>
      </div>

      {books
        .filter(
          (b) =>
            b.title.toLowerCase().includes(search.toLowerCase()) ||
            b.author.toLowerCase().includes(search.toLowerCase())
        )
        .map((book) => (
          <div className="book" key={book.id}>
            <div>
              <h3>{book.title}</h3>
              <p>by {book.author}</p>
            </div>
            <button
              className="remove"
              onClick={() => removeBook(book.id)}
            >
              Remove
            </button>
          </div>
        ))}
    </div>
  );
}

export default App;