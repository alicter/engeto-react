import { useState } from "react";
import BookmarkBtn from "./BookmarkBtn";
import BookFolder from "./BookFolder";
import "./BooksDiv.css";
const BooksDiv = (props) => {
  const [choosenFolder, setChoosenFloder] = useState(0);
  return (
    <div className="mainBooksDiv">
      <div className="BooksDiv">
        {props.books.map((item) => (
          <BookmarkBtn
            key={item.index}
            book={item.book}
            cvak={() => setChoosenFloder(item.index)}
          />
        ))}
      </div>
      <div className="BooksDivA">{<BookFolder book={choosenFolder} />}</div>
    </div>
  );
};

export default BooksDiv;
