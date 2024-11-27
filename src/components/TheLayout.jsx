import WelcomeStatic from "./WelcomeStatic";
import books from "../book.json";
import ItemStatic from "./ItemStatic";
import "./TheLayout.css";
import BooksDiv from "./BooksDiv";
export const TheLayout = () => {
  const Books = books;
  return (
    <div className="TheLayout">
      <WelcomeStatic />
      <div className="BooksDivB">
        {Books.map((item) => (
          <ItemStatic
            key={item.index}
            img={item.img}
            book={item.book}
            author={item.author}
            note={item.note}
          />
        ))}
      </div>
      <BooksDiv books={Books} />
    </div>
  );
};
