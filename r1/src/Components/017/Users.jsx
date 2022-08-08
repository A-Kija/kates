import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';

function Users() {

    const [users, setUsers] = useState(null);

    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setUsers(res.data));


    }, []);


    return (
        <>
            <ul>
                {
                    users?.map(u => <li key={u.id}>{u.name}</li>)
                }

            </ul>
        </>
    )


}

export default Users;