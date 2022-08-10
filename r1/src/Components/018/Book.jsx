import { useContext } from "react";
import BooksContext from "./BooksContext";


function Book({ book, cat }) {

    const { addToCart } = useContext(BooksContext);

    return (
        <li className="li-book" style={{ backgroundColor: book.color + '40' }}>
            <div className="cat">{cat}</div>
            <h2>{book.title}</h2>
            <img src={book.img} alt={book.title} />
            <div className="author">{book.author}</div>
            <div className="bottom">
                <button className="red" onClick={() => addToCart(book.id)}>Pirkti</button>
                <div className="price">{book.price} EUR</div>
            </div>
        </li>
    )

}

export default Book;