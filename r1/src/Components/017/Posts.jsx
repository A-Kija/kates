import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';

const perPage = 30;

function Posts() {

    const [posts, setPosts] = useState(null);
    const [users, setUsers] = useState(null);

    const [pages, setPages] = useState(0);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => setPosts(res.data));
    }, []);

    useEffect(() => {
        if (null === posts) {
            return;
        }
        setPages(Math.ceil(posts.length / perPage));
    }, [posts]);
    
   

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setUsers(res.data));
    }, []);

    const sortTitle = () => {
        setPosts(p => [...p].sort((a, b) => b.title.length - a.title.length))
    }



    return (
        <>
            <div className="container">
            <select>
                {
                    [...Array(pages)].map((_, i) => <option key={i}>{i + 1} Page</option>)
                }
            </select>
            </div>
            <ul>
                {
                    posts ? posts.map(p => (<li className="users-list" key={p.id}>
                        <b>{p.title}</b>
                        <i>{users ? users.find(u => p.userId === u.id)?.name : '---loading---'}</i>
                        </li>))
                     : <li className="loader"></li>
                }
            </ul>
            <button onClick={sortTitle}>Sort Title</button>
        </>
    )


}

export default Posts;