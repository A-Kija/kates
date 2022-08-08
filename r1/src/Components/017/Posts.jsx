import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';

function Posts() {

    const [posts, setPosts] = useState(null);
    const [users, setUsers] = useState(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => setPosts(res.data));
    }, []);

   

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setUsers(res.data));
    }, []);



    return (
        <>
            <ul>
                {
                    posts ? posts.map(p => (<li className="users-list" key={p.id}>
                        <b>{p.title}</b>
                        <i>{users ? users.find(u => p.userId === u.id)?.name : '---loading---'}</i>
                        </li>))
                     : <li className="loader"></li>
                }
            </ul>
        </>
    )


}

export default Posts;