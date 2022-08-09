import { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './Book';
import randColor from '../../Functions/randColor';

function Books() {

    const [books, setBooks] = useState(null);
    const [types, setTypes] = useState(null);

    useEffect(() => {
        axios.get('https://in3.dev/knygos/')
        .then(res => setBooks(res.data.map(b => ({...b, color: randColor()}))));
    }, []);

    useEffect(() => {
        axios.get('https://in3.dev/knygos/types/')
        .then(res => setTypes(res.data));
    }, []);

    return (
        <ul className="books-list">
            {
                books ? books.map(b => <Book key={b.id} book={b} cat={types?.find(t => t.id === b.id).title ?? '...loading'} />) : <li className="loader"></li>
            }
        </ul>
    )

}

export default Books;