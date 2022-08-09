

function Book({book, cat}) {

    

    return (
        <li className="li-book" style={{backgroundColor: book.color + '40'}}>
            <div className="cat">{cat}</div>
            <h2>{book.title}</h2>
            <img src={book.img} alt={book.title} />
            <div className="author">{book.author}</div>
            <div className="price">{book.price} EUR</div>
        </li>
    )

}

export default Book;