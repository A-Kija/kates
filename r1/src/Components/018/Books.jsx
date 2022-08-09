import { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './Book';

function Books() {

    const [books, setBooks] = useState(null);

    useEffect(() => {
        axios.get('https://in3.dev/knygos/')
        .then(res => setBooks(res.data));
    }, []);

    return (
        <ul className="books-list">
            {
                books ? books.map(b => <Book key={b.id} book={b} />) : <li className="loader"></li>
            }
        </ul>
    )

}

export default Books;