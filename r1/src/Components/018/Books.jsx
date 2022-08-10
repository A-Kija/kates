import { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './Book';
import randColor from '../../Functions/randColor';
import BooksContext from './BooksContext';

function Books() {

    const [books, setBooks] = useState(null);
    const [types, setTypes] = useState(null);
    const [cat, setCat] = useState(0);
    const [sort, setSort] = useState(0);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios.get('https://in3.dev/knygos/')
            .then(res => setBooks(res.data.map((b, i) => ({
                ...b,
                color: randColor(),
                show: true,
                row: i
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

    }, [cat]);

    useEffect(() => {
        switch (sort) {
            case 0:
                setBooks(b => b ? [...b].sort((a, b) => a.row - b.row) : null);
                break;
            case 1:
                setBooks(b => b ? [...b].sort((a, b) => a.price - b.price) : null);
                break;
            case 2:
                setBooks(b => b ? [...b].sort((a, b) => b.price - a.price) : null);
                break;
            default:
        }
    }, [sort]);

    const addToCart = (id, count) => {

        setCart(c => {
            const inCart = c.find(b => b.id === id);
            if (!inCart) {
                return [...c, {id, count: count}]
            }
            return c.map(b => b.id === id ? {...b, count: b.count + count} : {...b});
        });
    }

    return (
        <BooksContext.Provider value={{
            addToCart
        }}>
            <div className="cart-bin">
                <div className="cart">
                    <span>{cart.length}</span>
                    <svg>
                        <use href="#cart"></use>
                    </svg>
                    <div className="cart-list">
                        {
                            cart.map((b, i) => <div key={i}>
                                {books?.find(bo => bo.id === b.id).title}
                                <i>{b.count}</i>
                            </div>)
                        }
                    </div>

                </div>
            </div>
            {types ?
                <div className="container">
                    <select value={cat} onChange={e => setCat(parseInt(e.target.value))}>
                        <option value="0">Visos</option>
                        {
                            types?.map(t => <option key={t.id} value={t.id}>{t.title}</option>)
                        }
                    </select>
                </div> : null
            }
            <div className="container">
                <select value={sort} onChange={e => setSort(parseInt(e.target.value))}>
                    <option value="0">Pradinis</option>
                    <option value="1">Kaina min-max</option>
                    <option value="2">Kaina max-min</option>
                </select>
            </div>


            <ul className="books-list">
                {
                    books ? books.map(b =>
                        b.show ?
                            <Book key={b.id} book={b} cat={types?.find(t => t.id === b.type).title ?? '...loading'} />
                            : null
                    ) : <li className="loader"></li>
                }
            </ul>
        </BooksContext.Provider>
    )

}

export default Books;