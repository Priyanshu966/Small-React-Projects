import books from "./books.js";
import "./Booklist.css";

const Book = ({ img, title, author, id }) => {
  return (
    <div className="book-cont">
      <img src={img} />
      <h4>{title}</h4>
      <h6>{author}</h6>
      <span className="tag">#{id}</span>
    </div>
  );
};

const Booklist = () => {
  return (
    <>
      <h1>Amazon Best Sellers</h1>
      <div className="booklist">
        {books.map((book) => {
          return <Book {...book} key={book.id} />;
        })}
        ;
      </div>
    </>
  );
};

export default Booklist;
