import React, {useEffect, useState,useRef} from 'react';

import axios from 'axios';
import './App.css';

function App() {
    const userNameRef = useRef(null);

   const[users, setUsers]= useState([]);

   const getUsers = ()=>{
       axios.get('http://localhost:7542/users').then(res=>{
           setUsers(res.data)
       });
   }


    useEffect(() => {
        getUsers()
    }, []);


    const createUser = ()=>{
        axios.post("http://localhost:7542/users", {id: new Date, name:userNameRef.current.value}).then(res => {
           getUsers();
        })
    }

    return (<>
            <input ref={userNameRef}/>
        <div>
            <button onClick={createUser}>create user</button>
        </div>
        <div>
            {users.map(u => <div key={u.id}>{u.name}</div>)}
        </div>
        </>
    );
}

export default App;
