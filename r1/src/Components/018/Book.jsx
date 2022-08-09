import randColor from '../../Functions/randColor';

function Book({book}) {

    

    return (
        <li className="li-book" style={{backgroundColor: randColor()}}>
            <h2>{book.title}</h2>
            <img src={book.img} alt={book.title} />
            <div className="author">{book.author}</div>
            <div className="price">{book.price} EUR</div>
        </li>
    )

}

export default Book;