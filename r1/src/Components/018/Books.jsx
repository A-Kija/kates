import { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './Book';
import randColor from '../../Functions/randColor';

function Books() {

    const [books, setBooks] = useState(null);
    const [types, setTypes] = useState(null);
    const [cat, setCat] = useState(0);

    useEffect(() => {
        axios.get('https://in3.dev/knygos/')
        .then(res => setBooks(res.data.map(b => ({
            ...b,
            color: randColor(),
            show: true
        }))));
    }, []);

    useEffect(() => {
        axios.get('https://in3.dev/knygos/types/')
        .then(res => setTypes(res.data));
    }, []);

    useEffect(() => {
        setBooks(b => b?.map(book => ({
            ...book,
            show: (cat === 0 || cat === book.type) ? true : false
        })))

    }, [cat])

    return (
        <>
        { types ?
        <div className="container">
            <select value={cat} onChange={e => setCat(parseInt(e.target.value))}>
                <option value="0">Visos</option>
                {
                    types?.map(t => <option key={t.id} value={t.id}>{t.title}</option>)
                }
            </select>
        </div> : null
        }

        <ul className="books-list">
            {
                books ? books.map(b => 
                    b.show ?
                    <Book key={b.id} book={b} cat={types?.find(t => t.id === b.type).title ?? '...loading'} />
                    : null
                ) : <li className="loader"></li>
            }
        </ul>
        </>
    )

}

export default Books;